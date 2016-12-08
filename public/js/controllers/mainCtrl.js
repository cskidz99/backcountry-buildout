angular.module("bBuildout").controller("mainCtrl", function($scope, $state, $window, $sce, mainSvc){
    const baseUrl = "http://www.backcountry.com";

    // console.log("Fired");
    mainSvc.loginUser().then(res => {
          // console.log(res.data);
          $scope.user = res.data;

          mainSvc.getBuilds().then(res => {
            console.log(res.data);
            $scope.builds = res.data;
          })
    })

    $scope.logoutUser = function(){
      console.log('clicked');
      mainSvc.logoutUser().then(res => {
        $state.go("landing");
      })
    }

    $scope.saveBuild = function(){
      // console.log($scope.head1SearchUrl);
      // console.log($scope.head2SearchUrl);
      mainSvc.saveBuild({
        ownerId: $scope.user.db_id,
        buildName: $scope.buildName,
        build: [
        $scope.head1SearchUrl,
        $scope.head2SearchUrl,
        $scope.hands1SearchUrl,
        $scope.hands2SearchUrl,
        $scope.hands3SearchUrl,
        $scope.torso1SearchUrl,
        $scope.torso2SearchUrl,
        $scope.torso3SearchUrl,
        $scope.torso4SearchUrl,
        $scope.torso5SearchUrl,
        $scope.legs1SearchUrl,
        $scope.legs2SearchUrl,
        $scope.legs3SearchUrl,
        $scope.legs4SearchUrl,
        $scope.feet1SearchUrl,
        $scope.feet2SearchUrl,
        $scope.shoes1SearchUrl
      ]}).then(res => {
        console.log(res.data);
        mainSvc.getBuilds().then(res => {
          console.log(res.data);
          $scope.builds = res.data;
        })
      })
    }

    $scope.loadBuild = function(build){
      $scope.buildName = build.buildout_name;
      build.buildout_urls = build.buildout_urls.slice(1,build.buildout_urls.length-1).replace(/\"/g, '').split(",");
      $scope.head1SearchTerm = build.buildout_urls[0].slice(58);
      $scope.head2SearchTerm = build.buildout_urls[1].slice(58);
      $scope.hands1SearchTerm = build.buildout_urls[2].slice(58);
      $scope.hands2SearchTerm = build.buildout_urls[3].slice(58);
      $scope.hands3SearchTerm = build.buildout_urls[4].slice(58);
      $scope.torso1SearchTerm = build.buildout_urls[5].slice(58);
      $scope.torso2SearchTerm = build.buildout_urls[6].slice(58);
      $scope.torso3SearchTerm = build.buildout_urls[7].slice(58);
      $scope.torso4SearchTerm = build.buildout_urls[8].slice(58);
      $scope.torso5SearchTerm = build.buildout_urls[9].slice(58);
      $scope.legs1SearchTerm = build.buildout_urls[10].slice(58);
      $scope.legs2SearchTerm = build.buildout_urls[11].slice(58);
      $scope.legs3SearchTerm = build.buildout_urls[12].slice(58);
      $scope.legs4SearchTerm = build.buildout_urls[13].slice(58);
      $scope.feet1SearchTerm = build.buildout_urls[14].slice(58);
      $scope.feet2SearchTerm = build.buildout_urls[15].slice(58);
      $scope.shoes1SearchTerm = build.buildout_urls[16].slice(58);

      $scope.head1SearchUrl = build.buildout_urls[0];
      $scope.head2SearchUrl = build.buildout_urls[1];
      $scope.hands1SearchUrl = build.buildout_urls[2];
      $scope.hands2SearchUrl = build.buildout_urls[3];
      $scope.hands3SearchUrl = build.buildout_urls[4];
      $scope.torso1SearchUrl = build.buildout_urls[5];
      $scope.torso2SearchUrl = build.buildout_urls[6];
      $scope.torso3SearchUrl = build.buildout_urls[7];
      $scope.torso4SearchUrl = build.buildout_urls[8];
      $scope.torso5SearchUrl = build.buildout_urls[9];
      $scope.legs1SearchUrl = build.buildout_urls[10];
      $scope.legs2SearchUrl = build.buildout_urls[11];
      $scope.legs3SearchUrl = build.buildout_urls[12];
      $scope.legs4SearchUrl = build.buildout_urls[13];
      $scope.feet1SearchUrl = build.buildout_urls[14];
      $scope.feet2SearchUrl = build.buildout_urls[15];
      $scope.shoes1SearchUrl = build.buildout_urls[16];

      modal2.style.display = "none";

    }

    $scope.deleteBuild = function(id){
      mainSvc.deleteBuild(id).then(res => {
        $scope.builds = res.data;
      })
    }
    // Modal functions-----------------------
    // Get the modal
    var modal1 = document.getElementById('myModal1');
    var modal2 = document.getElementById('myModal2');

    // Get the button that opens the modal
    var btn1 = document.getElementById("myBtn1");
    var btn2 = document.getElementById("myBtn2");

    // Get the <span> element that closes the modal
    var span1 = document.getElementsByClassName("close")[0];
    var span2 = document.getElementsByClassName("close")[1];

    //Get the <p> element that displays the buildout name
    var name = document.getElementById("loadName");

    // When the user clicks on the button, open the modal
    btn1.onclick = function() {
        modal1.style.display = "block";
    }
    btn2.onclick = function() {
        modal2.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span1.onclick = function() {
        modal1.style.display = "none";
    }
    span2.onclick = function() {
        modal2.style.display = "none";
    }

    // When the user clicks on <p>, close the modal
    // name.onclick = function() {
    //     modal.style.display = "none";
    // }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
        if (event.target == modal1) {
            modal1.style.display = "none";
        }
    }

    // Clear button functions-------------
    $scope.clrHead1 = function(){
      $scope.head1SearchTerm = "";
      $scope.head1SearchUrl = "";
    }
    $scope.clrHead2 = function(){
      $scope.head2SearchTerm = "";
      $scope.head2SearchUrl = "";
    }
    $scope.clrHands1 = function(){
      $scope.hands1SearchTerm = "";
      $scope.hands1SearchUrl = "";
    }
    $scope.clrHands2 = function(){
      $scope.hands2SearchTerm = "";
      $scope.hands2SearchUrl = "";
    }
    $scope.clrHands3 = function(){
      $scope.hands3SearchTerm = "";
      $scope.hands3SearchUrl = "";
    }
    $scope.clrTorso1 = function(){
      $scope.torso1SearchTerm = "";
      $scope.torso1SearchUrl = "";
    }
    $scope.clrTorso2 = function(){
      $scope.torso2SearchTerm = "";
      $scope.torso2SearchUrl = "";
    }
    $scope.clrTorso3 = function(){
      $scope.torso3SearchTerm = "";
      $scope.torso3SearchUrl = "";
    }
    $scope.clrTorso4 = function(){
      $scope.torso4SearchTerm = "";
      $scope.torso4SearchUrl = "";
    }
    $scope.clrTorso5 = function(){
      $scope.torso5SearchTerm = "";
      $scope.torso5SearchUrl = "";
    }
    $scope.clrLegs1 = function(){
      $scope.legs1SearchTerm = "";
      $scope.legs1SearchUrl = "";
    }
    $scope.clrLegs2 = function(){
      $scope.legs2SearchTerm = "";
      $scope.legs2SearchUrl = "";
    }
    $scope.clrLegs3 = function(){
      $scope.legs3SearchTerm = "";
      $scope.legs3SearchUrl = "";
    }
    $scope.clrLegs4 = function(){
      $scope.legs4SearchTerm = "";
      $scope.legs4SearchUrl = "";
    }
    $scope.clrFeet1 = function(){
      $scope.feet1SearchTerm = "";
      $scope.feet1SearchUrl = "";
    }
    $scope.clrFeet2 = function(){
      $scope.feet2SearchTerm = "";
      $scope.feet2SearchUrl = "";
    }
    $scope.clrFeet3 = function(){
      $scope.shoes1SearchTerm = "";
      $scope.shoes1SearchUrl = "";
    }

    //iFrame functions-----------------
    // $scope.head1SearchUrl = baseUrl);
    $scope.changeLocationHead1 = head1SearchTerm => {
        $scope.head1SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + head1SearchTerm;
    }

    // var myIframe = document.getElementById('headBox1');
    // myIframe.onload = function () {
    //   myIframe.contentWindow.scrollTop(100);
    // }

    // $scope.head2SearchUrl = baseUrl);
    $scope.changeLocationHead2 = head2SearchTerm => {
        $scope.head2SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + head2SearchTerm;
    }

    // $scope.hands1SearchUrl = baseUrl);
    $scope.changeLocationHands1 = hands1SearchTerm => {
        $scope.hands1SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + hands1SearchTerm;
    }

    // $scope.hands2SearchUrl = baseUrl);
    $scope.changeLocationHands2 = hands2SearchTerm => {
        $scope.hands2SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + hands2SearchTerm;
    }

    // $scope.hands3SearchUrl = baseUrl);
    $scope.changeLocationHands3 = hands3SearchTerm => {
        $scope.hands3SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + hands3SearchTerm;
    }

    // $scope.torso1SearchUrl = baseUrl);
    $scope.changeLocationTorso1 = torso1SearchTerm => {
        $scope.torso1SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + torso1SearchTerm;
    }

    // $scope.torso2SearchUrl = baseUrl);
    $scope.changeLocationTorso2 = torso2SearchTerm => {
        $scope.torso2SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + torso2SearchTerm;
    }

    // $scope.torso3SearchUrl = baseUrl);
    $scope.changeLocationTorso3 = torso3SearchTerm => {
        $scope.torso3SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + torso3SearchTerm;
    }

    // $scope.torso4SearchUrl = baseUrl);
    $scope.changeLocationTorso4 = torso4SearchTerm => {
        $scope.torso4SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + torso4SearchTerm;
    }

    // $scope.torso5SearchUrl = baseUrl);
    $scope.changeLocationTorso5 = torso5SearchTerm => {
        $scope.torso5SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + torso5SearchTerm;
    }

    // $scope.legs1SearchUrl = baseUrl);
    $scope.changeLocationLegs1 = legs1SearchTerm => {
        $scope.legs1SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + legs1SearchTerm;
    }

    // $scope.legs2SearchUrl = baseUrl);
    $scope.changeLocationLegs2 = legs2SearchTerm => {
        $scope.legs2SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + legs2SearchTerm;
    }

    // $scope.legs3SearchUrl = baseUrl);
    $scope.changeLocationLegs3 = legs3SearchTerm => {
        $scope.legs3SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + legs3SearchTerm;
    }

    // $scope.legs4SearchUrl = baseUrl);
    $scope.changeLocationLegs4 = legs4SearchTerm => {
        $scope.legs4SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + legs4SearchTerm;
    }

    // $scope.legs1SearchUrl = baseUrl);
    $scope.changeLocationLegs1 = legs1SearchTerm => {
        $scope.legs1SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + legs1SearchTerm;
    }

    // $scope.feet1SearchUrl = baseUrl);
    $scope.changeLocationFeet1 = feet1SearchTerm => {
        $scope.feet1SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + feet1SearchTerm;
    }

    // $scope.feet2SearchUrl = baseUrl);
    $scope.changeLocationFeet2 = feet2SearchTerm => {
        $scope.feet2SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + feet2SearchTerm;
    }

    // $scope.shoes1SearchUrl = baseUrl);
    $scope.changeLocationShoes1 = shoes1SearchTerm => {
        $scope.shoes1SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + shoes1SearchTerm;
    }


});
