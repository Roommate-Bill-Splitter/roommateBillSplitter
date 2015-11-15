let LayoutController = function($scope, $http, $cookies, SERVER, sweet, $state){

  

  
  $scope.logMeOut = function(){
    $cookies.remove('authToken');
    SERVER.CONFIG.headers['X-AUTH-TOKEN'] = null;
    $state.go('root.home');
  }

  
}

LayoutController.$inject = ['$scope', '$http', '$cookies', 'SERVER', 'sweet', '$state'];

export default LayoutController;