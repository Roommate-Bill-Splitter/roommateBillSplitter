let IndBillController = function($scope, $stateParams, sweet, $state, $http, SERVER, $cookies){
    //get request for individual bill using $stateParams.id
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
      


    $scope.results= res.data.bill
    console.log($scope.results)
    
    $scope.deleteBill= function(){
      sweet.show({
          title:'Delete this bill?',
          text: 'Whatever you say, man.',
          confirmButtonText: "Get rid of this thing",
          showCancelButton: true

      }, function(){
        console.log(token);
        console.log(thisBill);
        $http({
          url: SERVER.URL + 'bill/' + thisBill,
          method: 'DELETE',
          headers:{
            auth_token: token
          },
          data:{
            bill_id: thisBill
          }
        });
        $state.go('root.bills')
      });
      
    }

   })
    
};

IndBillController.$inject = ['$scope','$stateParams', 'sweet', '$state', '$http', 'SERVER', '$cookies'];

export default IndBillController;