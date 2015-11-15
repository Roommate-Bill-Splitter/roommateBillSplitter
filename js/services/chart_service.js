let ChartService = function($http, SERVER) {

  let url1 = SERVER.URL + 'bill';
  let url2 = SERVER.URL + 'roommates';


  this.getBills = function () {
    return $http({
      url: url,
      headers: SERVER.CONFIG.headers,
      method: 'GET',
      cache: true
    })
  };

this.getRoommates = function () {
    return $http({
      url2: url2,
      headers: SERVER.CONFIG.headers,
      method: 'GET',
      cache: true
    })
  };



};

ChartService.$inject = ['$http', 'SERVER'];

export default ChartService;
