import $ from 'jquery';
let EditBillController = function($scope, sweet, $state, $http, SERVER, $cookies, $stateParams){
  
  let token = $cookies.get('authToken')
  let thisBill= $stateParams.id;

  $http({
      url: SERVER.URL + 'bill/' + thisBill,
        method: 'GET',
        headers:{
          auth_token: token
        },
        data:{
          bill_id: thisBill
        }
  }).then((res)=>{
    
    $scope.results= res.data.bill;
    console.log($scope.results);
    
  })

    function Bill (obj){
      this.title = obj.title;
      this.amount=obj.amount;
      this.due_date= obj.due_date;
      this.user_id= obj.user_id;
  }
  $scope.editedBill={};
  $scope.editBill= function(results){
    //put request
    let x = new Bill(results);
    $scope.editedBill = {
      user_id: x.user_id,
      title: x.title,
      amount: x.amount,
      due_date: x.due_date

    };
    console.log($scope.editedBill);

    $http({
      url: SERVER.URL + 'bill/' + thisBill,
        method: 'PUT',
        headers:{
          auth_token: token
        },
        data: {
          title: $scope.editedBill.title,
          due_date: $scope.editedBill.due_date,
          user_id: $scope.editedBill.user_id,
          amount: $scope.editedBill.amount
        }
  }).then((res)=>{
    
    console.log(res);
    
  })
      sweet.show({
          title:'Bill Edited!',
          text: 'You are on top of this.',
          confirmButtonText: "Aight",

      }, function(){
        // $state.go('root.bills')
      });

  }
  

};
    
    
      
    



EditBillController.$inject = ['$scope', 'sweet', '$state', '$http', 'SERVER', '$cookies', '$stateParams'];

export default EditBillController;