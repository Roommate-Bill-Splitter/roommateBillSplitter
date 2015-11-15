let ChartController = function($scope, $http, $cookies, SERVER, ChartService) {

  $scope.title = 'Bill Chart';

  //TEST
    let token = $cookies.get('authToken');

  //BILLS
  $http({
    url: SERVER.URL + 'bill',
      method: 'GET',
      headers:{
        auth_token: token
      }
  }).then((res) => {
    
    $scope.bills = res.data.bill;
    
  })

  //ROOMMATES
  $http({
    url: SERVER.URL + 'roommates',
      method: 'GET',
      headers:{
        auth_token: token
      }
  }).then((res) => {
    console.log(res);
    $scope.roommates = res.data.roommates;
    
  })


  //TEST

  // ChartService.getRoommates().then ( (res) => {
  //   $scope.roommates = res.data.roommates; 

  //   console.log($scope.roommates);   
  // });

//   ChartService.getBills().then ( (res) => {
//     $scope.bill = res.data.bill; 

//   });

};

ChartController.$inject = ['$scope','$http', '$cookies', 'SERVER', 'ChartService'];

export default ChartController;