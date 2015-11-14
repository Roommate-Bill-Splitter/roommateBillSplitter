import $ from 'jquery';
let EditBillController = function($scope, sweet, $state){
  
    function Bill (obj){
      this.name = obj.name;
      this.amount=obj.amount;
      this.due= obj.due;
  }
  $scope.editedBill={};
  $scope.editBill= function(results){
    //put request
    let x = new Bill(results);
    $scope.editedBill = {
      name: x.name,
      amount: x.amount,
      due: x.due
    };
    
      sweet.show({
          title:'Bill Edited!',
          text: 'You are on top of this.',
          confirmButtonText: "Aight",

      }, function(){
        $state.go('root.bills')
      });
    
    
      $('#addForm').validate();
    
  }
};

EditBillController.$inject = ['$scope', 'sweet', '$state'];

export default EditBillController;