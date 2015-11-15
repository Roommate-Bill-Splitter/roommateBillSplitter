let UserService = function($http, SERVER, $cookies, $state, sweet) {
  
  this.checkAuth = function() {

    let token = $cookies.get('authToken');
    let id= $cookies.get('user_id');
    

    if (token) {
      
      $state.go('root.dashboard');
    } 
  }

  let user = function (obj) {
    this.first_name = obj.first_name;
    this.last_name = obj.last_name;
    this.email = obj.email;
    this.password = obj.password;
    this.address = obj.address;
  };


  this.create = function(obj){
    
    let u = new user(obj);
    
    return $http.post(SERVER.URL +'signup', u).then((res)=>{
      console.log(res);
      $cookies.put('authToken', res.data.user.auth_token);
      $cookies.put('user_id', res.data.user.id);
      SERVER.CONFIG.headers['X-AUTH-TOKEN'] = res.data.user.auth_token;
      $state.go('root.dashboard')
    })
  }

  this.sendLogin = function(userObj){
    $http.post(SERVER.URL + 'login', userObj, SERVER.CONFIG).then((res)=>{
      console.log(res);
      $cookies.put('authToken', res.data.user.auth_token);
      $cookies.put('user_id', res.data.user.id);
      SERVER.CONFIG.headers['X-AUTH-TOKEN'] = res.data.user.auth_token;
      $state.go('root.dashboard')
    });
    
  };

  this.logout = function (){
    $cookies.remove('authToken');
    SERVER.CONFIG.headers['X-AUTH-TOKEN'] = null;
    $state.go('root.login');
  };
};
  

UserService.$inject = ['$http', 'SERVER', '$cookies', '$state', 'sweet'];

export default UserService;