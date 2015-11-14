let UserService = function($http, SERVER, $cookies, $state) {
  
  this.checkAuth = function() {

    let token = $cookies.get('authToken');

    if (token) {
      return  $http.get(SERVER.URL + 'check', SERVER.CONFIG);
    } else {
      $state.go('root.home');
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
    
    return $http.post(SERVER.URL +'signup', u)
  }

  this.sendLogin = function(userObj){
    return $http.post(SERVER.URL + 'login', userObj, SERVER.CONFIG);
    
  };

  this.loginSuccess= function (res) {
    console.log(res);
    $cookies.put('authToken', res.data.user.auth_token);
    SERVER.CONFIG.headers['X-AUTH-TOKEN'] = res.data.user.auth_token;
    $state.go('root.dashboard')
  };

  this.logout = function (){
    $cookies.remove('authToken');
    SERVER.CONFIG.headers['X-AUTH-TOKEN'] = null;
    $state.go('root.login');
  };
};
  

UserService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default UserService;