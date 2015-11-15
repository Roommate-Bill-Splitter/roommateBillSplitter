let ChartService = function($http, SERVER) {

  let url = SERVER.URL + 'roommate/';


  this.getRoommates = function () {
    return $http({
      url: url,
      headers: SERVER.CONFIG.header,
      method: 'GET',
      cache: true
    });

  };

};

ChartService.$inject = ['$http', 'SERVER'];

export default ChartService;
