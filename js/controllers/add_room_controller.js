let AddRoomController = function($scope, RoomService, $state, sweet){

 
  $scope.addRoommate = (obj) => {
    console.log(obj);
    RoomService.addRoommate(obj).then( (res) => {
   
      
        $state.go('root.roommates')
        $scope.roomate={};
  
    });//RoomService
  }



  $scope.goBack = function() {
    $state.go('root.roommates');
  }



};

AddRoomController.$inject = ['$scope', 'RoomService', '$state', 'sweet'];

export default AddRoomController;