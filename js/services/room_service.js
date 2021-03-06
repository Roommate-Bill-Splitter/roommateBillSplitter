let RoomService = function($http, SERVER, $cookies) {
  
  let url = SERVER.URL; 

  //Display a list of all roommates
  this.getRoommates = function() {
    let token = $cookies.get('authToken');
    let id =$cookies.get('user_id');
    console.log(id);


      $http({
      url: url + 'roommates',
      method: 'GET',
      headers:{
        auth_token: token
      },
      data:{
     
      }
    }).then( (res) => {
    // console.log(res);
    
  })

  };

  //Display a single roommate
  this.getRoommate = function(id) {
      let token = $cookies.get('authToken');
      return $http({
      url: url + 'roommates/' + id,
      method: 'GET',
      headers:{
        auth_token: token
      },
      data:{
       
      }
    })

  };

  //Add a new roommate
  let Roommate = function(obj) {
    this.name = obj.name;
    this.email = obj.email;
    this.phone = obj.phone;
    this.user_id = obj.user_id;
  };

  this.addRoommate = function(obj) {
    
    
    let mate = new Roommate(obj);
    console.log(mate);
    let token = $cookies.get('authToken');
    

     return $http({
      url: url + 'roommates',
      method: 'POST',
      headers:{
        auth_token: token
      },
      data:{
        name: mate.name,
        email: mate.email,
        phone: mate.phone,
        user_id: id
      }
    }).then((res)=>{
      console.log(res);
    })

  };
  
  //Delete a roommate
  this.deleteRoommate = function(id) {
      return $http({
      url: url + 'roommates/' + id,
      method: 'DELETE',
      headers:{
        auth_token: token
      }
    })
  };
  //Edit a roommate
  this.editRoommate = function(id) {
      return $http({
      url: url + 'roommates/' + id,
      method: 'PUT',
      headers:{
        auth_token: token
      }
    })
  };
 
};

RoomService.$inject = ['$http', 'SERVER', '$cookies'];

export default RoomService;