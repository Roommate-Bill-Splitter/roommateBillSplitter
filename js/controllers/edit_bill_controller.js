import $ from 'jquery';
let EditBillController = function($scope, sweet, $state, $http, SERVER, $cookies, $stateParams){
  
  let token = $cookies.get('authToken')
  let id = $cookies.get('user_id');
  console.log(id);
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
  }
  $scope.editedBill={};
  $scope.editBill= function(results){
    //put request
    let x = new Bill(results);
    $scope.editedBill = {
      title: x.title,
      amount: x.amount,
      due_date: x.due_date

    };
    console.log(token);

    $http({
      url: SERVER.URL + 'bill/' + thisBill,
        method: 'PUT',
        headers:{
          auth_token: token
        },
        data: {
          user_id: id,
          title: $scope.editedBill.title,
          amount: $scope.editedBill.amount,
          due_date: $scope.editedBill.due_date
        }
  }).then((res)=>{
    
    console.log(res);
    
  })
      sweet.show({
          title:'Bill Edited!',
          text: 'You are on top of this.',
          confirmButtonText: "Aight",

      }, function(){
        $state.go('root.bills')
      });

  }
  

};
    
    
      
    



EditBillController.$inject = ['$scope', 'sweet', '$state', '$http', 'SERVER', '$cookies', '$stateParams'];

export default EditBillController;