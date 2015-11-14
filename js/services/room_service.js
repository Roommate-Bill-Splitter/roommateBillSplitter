let RoomService = function($http) {
  
  //Display a list of all roommates
  this.getRoommates = function() {

  }

  //Display a single roommate
  this.getRoommate = function() {

  }

  //Add a new roommate
  let Roommate = function(obj) {
    this.name = obj.name;
    this.email = obj.email;
    this.phone = obj.phone;
    this.house_id = obj.house_id;
  }

  this.addRoommate = function(obj) {
    let mate = new Roommate(obj);


  }
  
  //Delete a roommate
  this.deleteRoommate = function() {
    return 'deleted from service';
  }
  //Edit a roommate
  this.editRoommate = function() {
    
  }
 
};

RoomService.$inject = ['$http'];

export default RoomService;