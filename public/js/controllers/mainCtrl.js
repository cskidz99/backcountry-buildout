angular.module("bBuildout").controller("mainCtrl", function($scope, $state, $window, $sce){
    const baseUrl = "http://www.backcountry.com";

    // $scope.head1SearchUrl = $sce.trustAsResourceUrl(baseUrl);
    $scope.changeLocationHead1 = head1SearchTerm => {
        $scope.head1SearchUrl = $sce.trustAsResourceUrl(baseUrl + "/Store/catalog/search.jsp?s=u&q=" + head1SearchTerm);
    }

    // var myIframe = document.getElementById('headBox1');
    // myIframe.onload = function () {
    //   myIframe.contentWindow.scrollTop(100);
    // }

    // $scope.head2SearchUrl = $sce.trustAsResourceUrl(baseUrl);
    $scope.changeLocationHead2 = head2SearchTerm => {
        $scope.head2SearchUrl = $sce.trustAsResourceUrl(baseUrl + "/Store/catalog/search.jsp?s=u&q=" + head2SearchTerm);
    }

    // $scope.hands1SearchUrl = $sce.trustAsResourceUrl(baseUrl);
    $scope.changeLocationHands1 = hands1SearchTerm => {
        $scope.hands1SearchUrl = $sce.trustAsResourceUrl(baseUrl + "/Store/catalog/search.jsp?s=u&q=" + hands1SearchTerm);
    }

    // $scope.hands2SearchUrl = $sce.trustAsResourceUrl(baseUrl);
    $scope.changeLocationHands2 = hands2SearchTerm => {
        $scope.hands2SearchUrl = $sce.trustAsResourceUrl(baseUrl + "/Store/catalog/search.jsp?s=u&q=" + hands2SearchTerm);
    }

    // $scope.hands3SearchUrl = $sce.trustAsResourceUrl(baseUrl);
    $scope.changeLocationHands3 = hands3SearchTerm => {
        $scope.hands3SearchUrl = $sce.trustAsResourceUrl(baseUrl + "/Store/catalog/search.jsp?s=u&q=" + hands3SearchTerm);
    }

    // $scope.torso1SearchUrl = $sce.trustAsResourceUrl(baseUrl);
    $scope.changeLocationTorso1 = torso1SearchTerm => {
        $scope.torso1SearchUrl = $sce.trustAsResourceUrl(baseUrl + "/Store/catalog/search.jsp?s=u&q=" + torso1SearchTerm);
    }

    // $scope.torso2SearchUrl = $sce.trustAsResourceUrl(baseUrl);
    $scope.changeLocationTorso2 = torso2SearchTerm => {
        $scope.torso2SearchUrl = $sce.trustAsResourceUrl(baseUrl + "/Store/catalog/search.jsp?s=u&q=" + torso2SearchTerm);
    }

    // $scope.torso3SearchUrl = $sce.trustAsResourceUrl(baseUrl);
    $scope.changeLocationTorso3 = torso3SearchTerm => {
        $scope.torso3SearchUrl = $sce.trustAsResourceUrl(baseUrl + "/Store/catalog/search.jsp?s=u&q=" + torso3SearchTerm);
    }

    // $scope.torso4SearchUrl = $sce.trustAsResourceUrl(baseUrl);
    $scope.changeLocationTorso4 = torso4SearchTerm => {
        $scope.torso4SearchUrl = $sce.trustAsResourceUrl(baseUrl + "/Store/catalog/search.jsp?s=u&q=" + torso4SearchTerm);
    }

    // $scope.torso5SearchUrl = $sce.trustAsResourceUrl(baseUrl);
    $scope.changeLocationTorso5 = torso5SearchTerm => {
        $scope.torso5SearchUrl = $sce.trustAsResourceUrl(baseUrl + "/Store/catalog/search.jsp?s=u&q=" + torso5SearchTerm);
    }

    // $scope.legs1SearchUrl = $sce.trustAsResourceUrl(baseUrl);
    $scope.changeLocationLegs1 = legs1SearchTerm => {
        $scope.legs1SearchUrl = $sce.trustAsResourceUrl(baseUrl + "/Store/catalog/search.jsp?s=u&q=" + legs1SearchTerm);
    }

    // $scope.legs2SearchUrl = $sce.trustAsResourceUrl(baseUrl);
    $scope.changeLocationLegs2 = legs2SearchTerm => {
        $scope.legs2SearchUrl = $sce.trustAsResourceUrl(baseUrl + "/Store/catalog/search.jsp?s=u&q=" + legs2SearchTerm);
    }

    // $scope.legs3SearchUrl = $sce.trustAsResourceUrl(baseUrl);
    $scope.changeLocationLegs3 = legs3SearchTerm => {
        $scope.legs3SearchUrl = $sce.trustAsResourceUrl(baseUrl + "/Store/catalog/search.jsp?s=u&q=" + legs3SearchTerm);
    }

    // $scope.legs4SearchUrl = $sce.trustAsResourceUrl(baseUrl);
    $scope.changeLocationLegs4 = legs4SearchTerm => {
        $scope.legs4SearchUrl = $sce.trustAsResourceUrl(baseUrl + "/Store/catalog/search.jsp?s=u&q=" + legs4SearchTerm);
    }

    // $scope.legs1SearchUrl = $sce.trustAsResourceUrl(baseUrl);
    $scope.changeLocationLegs1 = legs1SearchTerm => {
        $scope.legs1SearchUrl = $sce.trustAsResourceUrl(baseUrl + "/Store/catalog/search.jsp?s=u&q=" + legs1SearchTerm);
    }

    // $scope.feet1SearchUrl = $sce.trustAsResourceUrl(baseUrl);
    $scope.changeLocationFeet1 = feet1SearchTerm => {
        $scope.feet1SearchUrl = $sce.trustAsResourceUrl(baseUrl + "/Store/catalog/search.jsp?s=u&q=" + feet1SearchTerm);
    }

    // $scope.feet2SearchUrl = $sce.trustAsResourceUrl(baseUrl);
    $scope.changeLocationFeet2 = feet2SearchTerm => {
        $scope.feet2SearchUrl = $sce.trustAsResourceUrl(baseUrl + "/Store/catalog/search.jsp?s=u&q=" + feet2SearchTerm);
    }

    // $scope.shoes1SearchUrl = $sce.trustAsResourceUrl(baseUrl);
    $scope.changeLocationShoes1 = shoes1SearchTerm => {
        $scope.shoes1SearchUrl = $sce.trustAsResourceUrl(baseUrl + "/Store/catalog/search.jsp?s=u&q=" + shoes1SearchTerm);
    }


});
