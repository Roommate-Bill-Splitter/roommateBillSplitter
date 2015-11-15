let BillsController = function($scope, $http, $cookies, SERVER, sweet){

  

  let token = $cookies.get('authToken');

  $http({
    url: SERVER.URL + 'bill',
      method: 'GET',
      headers:{
        auth_token: token
      }
  }).then((res)=>{
    console.log(res)
    $scope.roomList = res.data.bill;
    
  })

};

BillsController.$inject = ['$scope', '$http', '$cookies', 'SERVER', 'sweet'];

export default BillsController;