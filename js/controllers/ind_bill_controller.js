let IndBillController = function($scope, $stateParams, sweet, $state){
    //get request for individual bill using $stateParams.id
    $scope.results= //whatever
    $scope.editBill= ()=>$state.go('root.editBill')
    $scope.deleteBill= function(){
      sweet.show({
          title:'Delete this bill?',
          text: 'Whatever you say, man.',
          confirmButtonText: "Get rid of this thing",
          showCancelButton: true

      }, function(){
        //delete request
        $state.go('root.bills')
      });
      
    }

   
    
};

IndBillController.$inject = ['$scope','$stateParams', 'sweet', '$state'];

export default IndBillController;