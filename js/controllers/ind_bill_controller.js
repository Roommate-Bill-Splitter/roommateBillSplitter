let IndBillController = function($scope, $stateParams){
    //get request for individual bill using $stateParams.id
    $scope.results= //whatever

    $scope.deleteBill= function(){
      //delete request
    }

    $scope.editBill= function(){
      //put request
    }
};

IndBillController.$inject = ['$scope','$stateParams'];

export default IndBillController;