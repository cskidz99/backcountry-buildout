angular.module("bBuildout").controller("mainCtrl", function($scope, $state, $window, $sce, mainSvc){
    const baseUrl = "http://www.backcountry.com";

    $scope.saveBuild = function(){
      console.log($scope.head1SearchUrl);
      console.log($scope.head2SearchUrl);
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
      })
    }
    // console.log("Fired");
    mainSvc.loginUser().then(res => {
          // console.log(res.data);
          $scope.user = res.data;
    })
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
