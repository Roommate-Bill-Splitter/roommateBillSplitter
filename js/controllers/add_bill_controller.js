let AddBillController = function($scope, $stateParams){

  $scope.title = 'add bill';
  $scope.newBill={};

  function Bill (obj){
    this.name = obj.name;
    this.amount=obj.amount;
    this.due= obj.due;
  }

  $scope.addBill = function (bill) {
    let x = new Bill(bill);
    $scope.newBill = {
      name: x.name,
      amount: x.amount,
      due: x.due
    };
    console.log($scope.newBill);
    
    //post request with newBill
    
  }


};

AddBillController.$inject = ['$scope', '$stateParams'];

export default AddBillController;