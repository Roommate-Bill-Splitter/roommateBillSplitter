let RoomBillController = function($scope, RoomService, $state, $cookies, $http, SERVER, $stateParams){

  let roommateId = $stateParams.id;
  let token = $cookies.get('authToken');
  let id = $cookies.get('user_id');



  $scope.goBack = function() {
    $state.go('root.roommates');
  };


  $http({
    url: SERVER.URL + 'roommates/' + roommateId,
      method: 'GET',
      headers:{
        auth_token: token
      },
      data: {
        
      }

  }).then((res)=>{
    $scope.roommate = res.data.roommate;
    
    console.log(res);
    
  })

  //Delete a roommate
  // $scope.deleteRoom = function() {
  //   console.log('Deleted');
  //   RoomService.deleteRoommate().then( (res) => {
  //     console.log(res);
  //   })
  // };
  $scope.deleteRoom = function() {
    let token = $cookies.get('authToken');
    console.log(roommateId);
    $http({
    url: SERVER.URL + 'roommates' + roommateId,
      method: 'DELETE',
      headers:{
        auth_token: token
      },
       data:{
            id: roommateId
          }
  }).then((res)=>{
    
    
    console.log(res);
    
  })
  }


};

RoomBillController.$inject = ['$scope', 'RoomService', '$state', '$cookies', '$http', 'SERVER', '$stateParams'];

export default RoomBillController;