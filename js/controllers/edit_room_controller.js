let EditRoomController = function($scope, RoomService, $state){

//Get Roommate
RoomService.getRoommate($stateParams.id).then( (res) => {
  $scope.roommate = res.data;
});
//Put Roommate
 $scope.updateRoom = function() {
    // console.log('updated');
    RoomService.editRoommate(obj).then( (res) => {
      alert("updated");
    });
    
 };

 $scope.goBack = function() {
    $state.go('root.roommates');
  };



};

EditRoomController.$inject = ['$scope', 'RoomService', '$state'];

export default EditRoomController;