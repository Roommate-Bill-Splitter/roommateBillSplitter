let AddRoomController = function($scope){

  $scope.addRoommate = (obj) => {
    RoomService.addRoommate(obj).then( (res) => {
      $scope.roommate = {};
      alert("You Added a Roommate")
    });//RoomService
  }

};

AddRoomController.$inject = ['$scope'];

export default AddRoomController;