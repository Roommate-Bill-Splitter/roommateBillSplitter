let BillsController = function($scope, $http, $cookies, SERVER, sweet){

  

  let token = $cookies.get('authToken');
  let id = $cookies.get('user_id');


  $http({
    url: SERVER.URL + 'bill',
      method: 'GET',
      headers:{
        auth_token: token
      }
  }).then((res)=>{
    
    $scope.roomList = res.data.bill;
    console.log($scope.roomList);
    let newList=[];
    $scope.roomList.forEach(function(y){
      
      let id = $cookies.get('user_id');
      // console.log(id);
      if(y.user_id == id){
        newList.push(y);
        console.log(newList);
      $scope.newList= newList;
      }

    })
    
  })

};

BillsController.$inject = ['$scope', '$http', '$cookies', 'SERVER', 'sweet'];

export default BillsController;