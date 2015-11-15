import $ from 'jquery';
let AddBillController = function($scope, $stateParams, sweet, $state, SERVER, $http, $cookies){

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
    console.log(token);
    $http({
      url: SERVER.URL + 'bills',
      method: 'POST',
      headers:{
        auth_token: token
      }
    }).then((res)=>{
      console.log(res);
    })
  }


};

AddBillController.$inject = ['$scope', '$stateParams', 'sweet', '$state', 'SERVER', '$http', '$cookies'];

export default AddBillController;