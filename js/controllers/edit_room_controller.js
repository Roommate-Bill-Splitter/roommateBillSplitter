let EditRoomController = function($scope, RoomService, $state, $stateParams, $cookies, $http, SERVER){


  let token = $cookies.get('authToken');
  let id = $cookies.get('user_id');
  let roommateId = $stateParams.id;
  console.log(roommateId);


  //GET
  $http({
      url: SERVER.URL + 'roommates/' + roommateId,
        method: 'GET',
        headers:{
          auth_token: token
        },
        data:{
          
        }
  }).then((res)=>{
    
    // $scope.results= res.data.roommate;
    console.log(res);
    
  })

//Put Roommate
 // $scope.editRoommate = function(obj) {
 //    console.log(obj);
 //   //post request 
 //    let token = $cookies.get('authToken');
 //    console.log(token);
 //    $http({
 //      url: SERVER.URL + 'roommates' + roommateId,
 //      method: 'POST',
 //      headers:{
 //        auth_token: token
 //      }, //headers
 //      data:{
 //        name: obj.name,
 //        email: obj.email,
 //        phone: obj.phone,
 //        user_id: id

        
 //      } //data

 //     })//$http
    
 // };

 $scope.goBack = function() {
    $state.go('root.roommates');
  };



};

EditRoomController.$inject = ['$scope', 'RoomService', '$state', '$stateParams', '$cookies', '$http', 'SERVER'];

export default EditRoomController;