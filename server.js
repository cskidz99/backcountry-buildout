var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser'); //Don't need these for this example
var cors = require('cors');
var massive = require('massive');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var StravaStrategy = require('passport-strava-oauth2').Strategy;
var config = require('./config');
var connString = "postgres://localhost/bbox";

var db = massive.connect({connectionString : connString},
  function(err, localdb){
    db = localdb;
    app.set('db', db);

    db.user_create_seed(function(){
      console.log("User Table Init");
    });

    db.buildout_create_seed(function(){
      console.log("Buildout Table Init")
    });

})

passport.use(new FacebookStrategy({
  clientID: config.facebookID,//should copy these from the company's docs
  clientSecret: config.facebookSecret,
  callbackURL: config.baseDomain + '/auth/facebook/callback'
}, function(token, refreshToken, profile, done) {
  //Code goes here!!!
    //Go to database and look for profile.id
    //Create user using profile.id
  return done(null /*error*/, profile /*info that goes on session*/);
}));

passport.use(new StravaStrategy({
    clientID: config.STRAVA_CLIENT_ID,
    clientSecret: config.STRAVA_CLIENT_SECRET,
    callbackURL: config.baseDomain + '/auth/strava/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {

      // To keep the example simple, the user's Strava profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Strava account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }
));

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.use(session({secret: config.secret}));//express session MUST be before passposrt stuff

app.use(passport.initialize()); //MUST initialize passport before passport.session
app.use(passport.session());

//Here to help with session
//Preps data to put on session
passport.serializeUser(function(user, done) {
  done(null, user);
});
//Gets data from session and preps for req.user
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
	successRedirect: '/me',
	failureRedirect: '/login'
}), function(req, res) {
	// console.log(req.session);
});

app.get('/auth/strava', passport.authenticate('strava'));
app.get('/auth/strava/callback', passport.authenticate('strava', {
  // successRedirect: '/me',
  failureRedirect: '/login'
}), function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/#/main');
});

app.get('/me', function(req,res,next){
  var user = req.user._json;
  db.users.findOne({strava_id: Number(user.id)}, function(err, dbUser) {
    if (!dbUser){
      db.users.insert({strava_id: Number(user.id)}, function(err, user) {
        // console.log("Err", err)
        // console.log("User", user);
        req.user.db_id = user.id;
        res.send(req.user);
      })
    } else {
      req.user.db_id = dbUser.id;
      res.send(req.user);
    }
  })
});

app.get('/logout', function(req,res,next){
  req.logout();
  res.redirect("/");
  return;
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
  // console.log('hit');
});

app.get('/builds', function(req,res,next) {
  console.log(req.user.db_id);
  db.buildouts.find({ownerid: req.user.db_id}, function(err,builds){
    console.log(builds);
    return res.status(200).json(builds);
  })
});

app.post('/builds', function(req, res, next) {
  console.log(req.body);
  db.buildouts.findOne({ownerid: req.body.ownerId, buildout_name: req.body.buildName}, function(err,existingBuild) {
    if (!existingBuild){
      db.save_build([req.body.ownerId, req.body.buildName, req.body.build], function(err,build){
        console.log(build);
      })
    } else {
      db.buildouts.update({id: existingBuild.id, buildout_urls: req.body.build}, function(err,buildout){
        if (err){
          return res.status(500).json(err);
        }
      })
    }
  })
  return res.status(201).json(req.body);
});

app.delete('/builds/:id', function(req,res,next){
  db.buildouts.destroy({id: req.params.id}, function(err,deletedBuild){
    if (!err && deletedBuild.length){
      db.buildouts.find({ownerid: req.user.db_id}, function(err,builds){
        console.log(builds);
        return res.status(200).json(builds);
      })
    }
  })
});

app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
});
