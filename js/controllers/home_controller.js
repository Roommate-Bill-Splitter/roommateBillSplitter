let HomeController = function($scope, UserService, $cookies, $state){
 

  $scope.create = function(user){

    
    UserService.create(user).then((res)=>{
      console.log(res);
    $state.go('root.dashboard');
    });

  }

  $scope.login = function(user) {

    UserService.sendLogin(user)
  };

  $scope.logmeout = function() {
    UserService.logout();
  };
};


HomeController.$inject = ['$scope', 'UserService', '$cookies', '$state'];


export default HomeController;
  