let UserService = function($http, SERVER, $cookies, $state) {
  
  this.checkAuth = function() {

    let token = $cookies.get('authToken');

    if (token) {
      return  $http.get(SERVER.URL + 'check', SERVER.CONFIG);
    } else {
      $state.go('root.home');
    }
  }

  let User = function (obj) {
    this.name = obj.name;
    this.email = obj.email;
    this.password = obj.password;
  };

  this.create = function(obj){
    let u = new User(obj);
    return $http.post(SERVER.URL, u, SERVER.CONFIG);
  }

  this.sendLogin = function(userObj){
    return $http.post(SERVER.URL + 'login', userObj, SERVER.CONFIG);
  };

  this.loginSuccess= function (res) {
    $cookies.put('authToken', res.data.auth_token);
    SERVER.CONFIG.headers['X-AUTH-TOKEN'] = res.data.auth_token;
    $state.go('root.dash')
  };

  this.logout = function (){
    $cookies.remove('authToken');
    SERVER.CONFIG.headers['XX-AUTH-TOKEN'] = null;
    $state.go('root.login');
  };
};
  

UserService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default UserService;