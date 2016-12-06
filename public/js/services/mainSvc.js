angular.module('bBuildout').service('mainSvc', function($http) {
  this.loginUser = () => {
    console.log("Service Fired");
    return $http.get('/me').then(res => res);
  }
  this.saveBuild = (urls) => {
    return $http.post('/builds', urls).then(res => res);
  }
})
