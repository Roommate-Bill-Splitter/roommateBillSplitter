let AddRoomController = function($scope, RoomService, $state, sweet){


  $scope.addRoommate = (obj) => {
    RoomService.addRoommate(obj).then( (res) => {
   
        sweet.show({
          title:'Roommate Added!',
          text: 'Congrats.',
          confirmButtonText: "K cool"
      }, function(){
        $state.go('root.roommates')
        $scope.roomate={};
      });
    });//RoomService
  }

  $scope.goBack = function() {
    $state.go('root.roommates');
  }



};

AddRoomController.$inject = ['$scope', 'RoomService', '$state', 'sweet'];

export default AddRoomController;