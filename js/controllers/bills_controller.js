let BillsController = function($scope, $http, $cookies, SERVER, sweet){

  

  let token = $cookies.get('authToken');

  $http({
    url: SERVER.URL + 'bill',
      method: 'GET',
      headers:{
        auth_token: token
      }
  }).then((res)=>{
    
    $scope.roomList = res.data.bill;
    console.log($scope.roomList);
    
  })

};

BillsController.$inject = ['$scope', '$http', '$cookies', 'SERVER', 'sweet'];

export default BillsController;