let RoomController = function($scope, RoomService, $state){


  //Get a list of all the roommates
  RoomService.getRoommates().then( (res) => {
    $scope.roommates = (res.data);
  })

  //Go to view a single roommate
  $scope.viewRoomPage = function() {
    // console.log('View Me!');
    $state.go('root.roomBills');
  };

  //Delete a roommate
  $scope.deleteRoom = function() {
    console.log('Deleted');
    RoomService.deleteRoommate().then( (res) => {
      console.log(res);
    })
  };
  //Go to the edit roommate page
  $scope.editRoomPage = function() {
    // console.log('Edited');
    $state.go('root.editRoommates');
  };
  //Go to the add a roommate page
  $scope.addRoomPage = function() {
    // console.log('Added');
    $state.go('root.addRoommate');
  };
  //Go back to the dashboard
  $scope.goBack = function() {
    $state.go('root.dashboard');
    
  };

   


};

RoomController.$inject = ['$scope', 'RoomService', '$state'];

export default RoomController;