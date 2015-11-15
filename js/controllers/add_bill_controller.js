import $ from 'jquery';
let AddBillController = function($scope, $stateParams, sweet, $state, SERVER, $http, $cookies){

  $scope.title = 'add bill';
  $scope.newBill={};

  function Bill (obj){
    this.title = obj.title;
    this.amount=obj.amount;
    this.due_date= obj.due_date;
  }

  $scope.addBill = function (bill) {
    let x = new Bill(bill);
    $scope.newBill = {
      title: x.title,
      amount: x.amount,
      due_date: x.due_date
    };
    console.log($scope.newBill);
    sweet.show({
          title:'Bill Added!',
          text: 'Congrats.',
          confirmButtonText: "K cool"
      }, function(){
        $state.go('root.bills')
        $scope.bill={};
      });
    
    //post request with newBill
    let token = $cookies.get('authToken');
    $http({
      url: SERVER.URL + 'bill',
      method: 'POST',
      headers:{
        auth_token: token
      },
      data:{
        title: $scope.newBill.title,
        amount: $scope.newBill.amount,
        due_date: $scope.newBill.due_date
      }
    }).then((res)=>{
      console.log(res);
    })
  }


};

AddBillController.$inject = ['$scope', '$stateParams', 'sweet', '$state', 'SERVER', '$http', '$cookies'];

export default AddBillController;