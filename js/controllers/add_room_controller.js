let AddRoomController = function($scope, RoomService, $state, sweet, $cookies, $http, SERVER){

 
  // $scope.addRoommate = (obj) => {
  //   console.log(obj);
  //   // let token = $cookies.get('authToken');
  //   RoomService.addRoommate(obj).then( (res) => {
   
      
  //       $state.go('root.roommates')
  //       $scope.roomate={};
  
  //   });//RoomService
  // }


  //////////////TEST////////////////////
//Add a new roommate
  let Roommate = function(obj) {
    this.name = obj.name;
    this.email = obj.email;
    this.phone = obj.phone;
   
  };

 $scope.addRoommate = function(obj) {
    let mate = new Roommate(obj);
    console.log(mate);

    //post request 
    let token = $cookies.get('authToken');
    console.log(token);
    $http({
      url: SERVER.URL + 'roommates',
      method: 'POST',
      headers:{
        auth_token: token
      }, //headers
      data:{
        name: mate.name,
        email: mate.email,
        phone: mate.phone
        
      } //data

     })//$http
        .then((res)=>{
      console.log(res);
    })
  }; 

  //////////////TEST////////////////////


  $scope.goBack = function() {
    $state.go('root.roommates');
  }

}; //AddRoomController

AddRoomController.$inject = ['$scope', 'RoomService', '$state', 'sweet', '$cookies', '$http', 'SERVER'];

export default AddRoomController;