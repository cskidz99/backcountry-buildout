'use strict';

angular.module('bBuildout', ['ui.router']).config(function ($sceProvider, $stateProvider, $urlRouterProvider) {
  $sceProvider.enabled(false);
  $urlRouterProvider.otherwise('/');
  $stateProvider.state("landing", {
    url: '/',
    templateUrl: '../views/landingHtml.html',
    controller: function controller($scope) {}
  }).state('main', {
    url: '/main',
    templateUrl: '../views/mainHtml.html',
    controller: 'mainCtrl'
  });
});
"use strict";

angular.module("bBuildout").controller("mainCtrl", function ($scope, $state, $window, $sce, mainSvc) {
    var baseUrl = "http://www.backcountry.com";

    $scope.saveBuild = function () {
        console.log($scope.head1SearchUrl);
        console.log($scope.head2SearchUrl);
        mainSvc.saveBuild({
            ownerId: $scope.user.db_id,
            buildName: $scope.buildName,
            build: [$scope.head1SearchUrl, $scope.head2SearchUrl, $scope.hands1SearchUrl, $scope.hands2SearchUrl, $scope.hands3SearchUrl, $scope.torso1SearchUrl, $scope.torso2SearchUrl, $scope.torso3SearchUrl, $scope.torso4SearchUrl, $scope.torso5SearchUrl, $scope.legs1SearchUrl, $scope.legs2SearchUrl, $scope.legs3SearchUrl, $scope.legs4SearchUrl, $scope.feet1SearchUrl, $scope.feet2SearchUrl, $scope.shoes1SearchUrl] }).then(function (res) {
            console.log(res.data);
        });
    };
    // console.log("Fired");
    mainSvc.loginUser().then(function (res) {
        // console.log(res.data);
        $scope.user = res.data;
    });
    // $scope.head1SearchUrl = baseUrl);
    $scope.changeLocationHead1 = function (head1SearchTerm) {
        $scope.head1SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + head1SearchTerm;
    };

    // var myIframe = document.getElementById('headBox1');
    // myIframe.onload = function () {
    //   myIframe.contentWindow.scrollTop(100);
    // }

    // $scope.head2SearchUrl = baseUrl);
    $scope.changeLocationHead2 = function (head2SearchTerm) {
        $scope.head2SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + head2SearchTerm;
    };

    // $scope.hands1SearchUrl = baseUrl);
    $scope.changeLocationHands1 = function (hands1SearchTerm) {
        $scope.hands1SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + hands1SearchTerm;
    };

    // $scope.hands2SearchUrl = baseUrl);
    $scope.changeLocationHands2 = function (hands2SearchTerm) {
        $scope.hands2SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + hands2SearchTerm;
    };

    // $scope.hands3SearchUrl = baseUrl);
    $scope.changeLocationHands3 = function (hands3SearchTerm) {
        $scope.hands3SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + hands3SearchTerm;
    };

    // $scope.torso1SearchUrl = baseUrl);
    $scope.changeLocationTorso1 = function (torso1SearchTerm) {
        $scope.torso1SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + torso1SearchTerm;
    };

    // $scope.torso2SearchUrl = baseUrl);
    $scope.changeLocationTorso2 = function (torso2SearchTerm) {
        $scope.torso2SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + torso2SearchTerm;
    };

    // $scope.torso3SearchUrl = baseUrl);
    $scope.changeLocationTorso3 = function (torso3SearchTerm) {
        $scope.torso3SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + torso3SearchTerm;
    };

    // $scope.torso4SearchUrl = baseUrl);
    $scope.changeLocationTorso4 = function (torso4SearchTerm) {
        $scope.torso4SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + torso4SearchTerm;
    };

    // $scope.torso5SearchUrl = baseUrl);
    $scope.changeLocationTorso5 = function (torso5SearchTerm) {
        $scope.torso5SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + torso5SearchTerm;
    };

    // $scope.legs1SearchUrl = baseUrl);
    $scope.changeLocationLegs1 = function (legs1SearchTerm) {
        $scope.legs1SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + legs1SearchTerm;
    };

    // $scope.legs2SearchUrl = baseUrl);
    $scope.changeLocationLegs2 = function (legs2SearchTerm) {
        $scope.legs2SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + legs2SearchTerm;
    };

    // $scope.legs3SearchUrl = baseUrl);
    $scope.changeLocationLegs3 = function (legs3SearchTerm) {
        $scope.legs3SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + legs3SearchTerm;
    };

    // $scope.legs4SearchUrl = baseUrl);
    $scope.changeLocationLegs4 = function (legs4SearchTerm) {
        $scope.legs4SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + legs4SearchTerm;
    };

    // $scope.legs1SearchUrl = baseUrl);
    $scope.changeLocationLegs1 = function (legs1SearchTerm) {
        $scope.legs1SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + legs1SearchTerm;
    };

    // $scope.feet1SearchUrl = baseUrl);
    $scope.changeLocationFeet1 = function (feet1SearchTerm) {
        $scope.feet1SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + feet1SearchTerm;
    };

    // $scope.feet2SearchUrl = baseUrl);
    $scope.changeLocationFeet2 = function (feet2SearchTerm) {
        $scope.feet2SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + feet2SearchTerm;
    };

    // $scope.shoes1SearchUrl = baseUrl);
    $scope.changeLocationShoes1 = function (shoes1SearchTerm) {
        $scope.shoes1SearchUrl = baseUrl + "/Store/catalog/search.jsp?s=u&q=" + shoes1SearchTerm;
    };
});
'use strict';

angular.module('bBuildout').service('mainSvc', function ($http) {
  this.loginUser = function () {
    console.log("Service Fired");
    return $http.get('/me').then(function (res) {
      return res;
    });
  };
  this.saveBuild = function (urls) {
    return $http.post('/builds', urls).then(function (res) {
      return res;
    });
  };
});
//# sourceMappingURL=bundle.js.map
