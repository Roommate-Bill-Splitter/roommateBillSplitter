let HomeController = function($scope, $cookies, UserService, $state, $rootScope){
 

  $scope.create = function(user){
    UserService.create(user).then((res) =>{
      $scope.create= {};
    });
    $state.go('/dashboard/:id');
  }

  $scope.login = function(user) {
    UserService.sendLogin(user).then((res) =>{
      UserService.loginSuccess(res);
    });
  };

  $scope.logmeout = function() {
    UserService.logout();
  };
};

HomeController.$inject = ['$scope', 'UserService', '$cookies', '$state', '$rootScope'];

export default HomeController;
  