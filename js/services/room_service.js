let RoomService = function($http, SERVER) {
  
  let url = SERVER.URL; 

  //Display a list of all roommates
  this.getRoommates = function() {
    return $http({
      url: url,
      headers: SERVER.CONFIG.headers,
      method: 'GET'
    });

  };

  //Display a single roommate
  this.getRoommate = function(id) {
    return $http({
      url: url + '/' + id,
      headers: SERVER.CONFIG.headers,
      method: 'GET'

    });

  };

  //Add a new roommate
  let Roommate = function(obj) {
    this.name = obj.name;
    this.email = obj.email;
    this.phone = obj.phone;
    this.user_id = obj.user_id;
  }

  this.addRoommate = function(obj) {
    let token = $cookies.get('authToken')
    let mate = new Roommate(obj);
    console.log(mate);
     return $http.post(url, mate, SERVER.CONFIG.headers: {
      auth_toke: token;
     });

  }
  
  //Delete a roommate
  this.deleteRoommate = function(obj) {
    return 'deleted from service';
  }
  //Edit a roommate
  this.editRoommate = function(obj) {
    return $http.put(url + '/' + obj.id, obj, SERVER.CONFIG);
  };
 
};

RoomService.$inject = ['$http', 'SERVER'];

export default RoomService;