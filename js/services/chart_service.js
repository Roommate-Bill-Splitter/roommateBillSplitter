let ChartService = function($http, SERVER) {

  let url = SERVER.URL + 'roommates';


  this.getRoommates = function () {
    return $http({
      url: url,
      headers: SERVER.CONFIG.headers,
      method: 'GET',
      cache: true
    });

  };

};

ChartService.$inject = ['$http', 'SERVER'];

export default ChartService;
