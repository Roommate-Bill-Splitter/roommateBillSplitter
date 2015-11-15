let RoomBillController = function($scope, RoomService, $state, $cookies, $http, SERVER){

  $scope.goBack = function() {
    $state.go('root.roommates');
  };

  //Delete a roommate
  // $scope.deleteRoom = function() {
  //   console.log('Deleted');
  //   RoomService.deleteRoommate().then( (res) => {
  //     console.log(res);
  //   })
  // };
  $scope.deleteRoom = function() {
    let token = $cookies.get('authToken');

    $http({
    url: SERVER.URL + 'roommates',
      method: 'DELETE',
      headers:{
        auth_token: token
      }
  }).then((res)=>{
    
    
    console.log(res);
    
  })
  }


};

RoomBillController.$inject = ['$scope', 'RoomService', '$state', '$cookies', '$http', 'SERVER'];

export default RoomBillController;