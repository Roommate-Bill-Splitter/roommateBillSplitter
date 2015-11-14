let EditRoomController = function($scope, RoomService, $state){


 $scope.updateRoom = function() {
    console.log('updated');
 };

 $scope.goBack = function() {
    $state.go('root.roommates');
  };



};

EditRoomController.$inject = ['$scope', 'RoomService', '$state'];

export default EditRoomController;