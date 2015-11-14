let HomeController = function($scope, $cookies, UserService, $state, $rootScope){
 
  $rootScope.bgimg = "Utility_Bills.gif";

  $scope.create = function(user){
    UserService.create($scope.user);
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
  