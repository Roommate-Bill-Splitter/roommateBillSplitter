let AddRoomController = function($scope, RoomService, $state){


  $scope.addRoommate = (obj) => {
    RoomService.addRoommate(obj).then( (res) => {
      $scope.roommate = {};
      alert("You Added a Roommate")
    });//RoomService
  }

  $scope.goBack = function() {
    $state.go('root.roommates');
  }

};

AddRoomController.$inject = ['$scope', 'RoomService', '$state'];

export default AddRoomController;