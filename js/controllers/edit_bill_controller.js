let EditBillController = function($scope, sweet, $state){

  $scope.editBill= function(results){
    //put request

    sweet.show({
          title:'Bill Edited!',
          text: 'You are on top of this.',
          confirmButtonText: "Aight",

      }, function(){
        $state.go('root.bills')
      });
  }
};

EditBillController.$inject = ['$scope', 'sweet', '$state'];

export default EditBillController;