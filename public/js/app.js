angular.module('bBuildout', ['ui.router'])
.config(function($sceProvider, $stateProvider, $urlRouterProvider) {
  $sceProvider.enabled(false);
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state("landing", {
      url: '/',
      templateUrl: '../views/landingHtml.html',
      controller: function($scope) {}
    })
    .state('main', {
      url: '/main',
      templateUrl: '../views/mainHtml.html',
      controller: 'mainCtrl'
    })
});
