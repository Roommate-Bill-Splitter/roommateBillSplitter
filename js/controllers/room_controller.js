let RoomController = function($scope, RoomService, $state){


  //Get a list of all the roommates


  
  $scope.viewRoomPage = function() {
    // console.log('View Me!');
    $state.go('root.roomBills');
  };
  $scope.deleteRoom = function() {
    console.log('Deleted');
    // RoomService.deleteRoommate().then( (res) => {
    //   console.log(res);
    // })
  };
  $scope.editRoomPage = function() {
    // console.log('Edited');
    $state.go('root.editRoommates');
  };
  $scope.addRoomPage = function() {
    // console.log('Added');
    $state.go('root.addRoommate');
  };
  $scope.goBack = function() {
    $state.go('root.dashboard');
    
  };

   


};

RoomController.$inject = ['$scope', 'RoomService', '$state'];

export default RoomController;