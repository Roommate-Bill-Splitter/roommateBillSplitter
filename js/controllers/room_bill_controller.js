let RoomBillController = function($scope, RoomService, $state){

  $scope.goBack = function() {
    $state.go('root.roommates');
  };


};

RoomBillController.$inject = ['$scope', 'RoomService', '$state'];

export default RoomBillController;