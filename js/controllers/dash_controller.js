let DashController = function($scope, $stateParams, UserService, $cookies, SERVER, $state){
  let promise = UserService.checkAuth();
  $scope.logMeOut = function(){
    $cookies.remove('authToken');
    SERVER.CONFIG.headers['X-AUTH-TOKEN'] = null;
    $state.go('root.home');
  }
  
};

DashController.$inject = ['$scope', '$stateParams', 'UserService', '$cookies', 'SERVER', '$state'];

export default DashController;