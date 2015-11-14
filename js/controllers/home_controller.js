let HomeController = function($scope, UserService, $cookies, $state){
 

  $scope.create = function(user){
    UserService.create(user).then((res) =>{
      $scope.create= {};
    });
    $state.go('/dashboard/:id');
  }

  let promise = UserService.checkAuth();

  if (promise) {
    promise.then( (res) => {
      console.log(res);
      if (res.data.status === 'Authentication failed.') {
        $state.go('root.login');
      } else {
        $scope.message = 'I am logged in';
      }
    });
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

HomeController.$inject = ['$scope', 'UserService', '$cookies', '$state'];

export default HomeController;
  