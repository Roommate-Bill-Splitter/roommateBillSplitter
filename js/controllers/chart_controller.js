let ChartController = function($scope, ChartService) {

  $scope.title = 'Bill Chart';

  ChartService.getRoommates().then ( (res) => {
    $scope.roommates = res.data.results;    
  });

  

};

ChartController.$inject = ['$scope', 'ChartService'];

export default ChartController;