angular.module("bBuildout").controller("mainCtrl", function($scope, $state, $window, $sce){
    const baseUrl = "http://www.backcountry.com";

    // $scope.head1SearchUrl = $sce.trustAsResourceUrl(baseUrl);
    $scope.changeLocationHead1 = head1SearchTerm => {
        $scope.head1SearchUrl = $sce.trustAsResourceUrl(baseUrl + "/Store/catalog/search.jsp?s=u&q=" + head1SearchTerm);
    }

    $scope.head2SearchUrl = $sce.trustAsResourceUrl(baseUrl);
    $scope.changeLocationHead2 = head2SearchTerm => {
        $scope.head2SearchUrl = $sce.trustAsResourceUrl(baseUrl + "/Store/catalog/search.jsp?s=u&q=" + head2SearchTerm);
    }

    $scope.torso1SearchUrl = $sce.trustAsResourceUrl(baseUrl);
    $scope.changeLocationTorso1 = torso1SearchTerm => {
        $scope.torso1SearchUrl = $sce.trustAsResourceUrl(baseUrl + "/Store/catalog/search.jsp?s=u&q=" + torso1SearchTerm);
    }

    $scope.hands1SearchUrl = $sce.trustAsResourceUrl(baseUrl);
    $scope.changeLocationHands1 = hands1SearchTerm => {
        $scope.hands1SearchUrl = $sce.trustAsResourceUrl(baseUrl + "/Store/catalog/search.jsp?s=u&q=" + hands1SearchTerm);
    }


});
