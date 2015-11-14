let DashController = function($scope, $stateParams, UserService){
  let promise = UserService.checkAuth();
    
  
};

DashController.$inject = ['$scope', '$stateParams', 'UserService'];

export default DashController;