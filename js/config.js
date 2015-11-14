let config= function($stateProvider, $urlRouterProvider, $httpProvider){
  $urlRouterProvider.otherwise('/');
  // $httpProvider.defaults.useXDomain = true;
  // delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.dashboard',{
      url: '/dashboard/:id',
      controller: 'DashController',
      templateUrl: 'templates/dash.tpl.html'
    })
    .state('root.charts',{
      url: '/charts/:id',
      controller: 'ChartController',
      templateUrl: 'templates/charts.tpl.html'  
    })
    .state('root.bills',{
      url: '/bills/:id',
      controller: 'BillsController',
      templateUrl: 'templates/bills.tpl.html'
    })
    .state('root.indBill',{
      url: '/bills/:id/:billName',   
      controller: 'IndBillController',
      templateUrl: 'templates/indBill.tpl.html'
    })
    .state('root.addBill',{
      url: '/bills/:id/add',
      controller: 'AddBillController',
      templateUrl: 'templates/addBill.tpl.html'
    })
    .state('root.editBill',{
      url: '/bills/:id/edit',
      controller: 'EditBillController',
      templateUrl: 'templates/editBill.tpl.html'
    })
    .state('root.roommates',{
      url: '/roommates/:id',
      controller: 'RoomController',
      templateUrl: 'templates/room.tpl.html'
    })
    .state('root.roomBills',{
      url: '/roommates/:id/:name/bills',
      controller: 'RoomBillController',
      templateUrl: 'templates/roomBill.tpl.html'
    })
    .state('root.addRoommate', {
      url: '/roommates/:id/add',
      controller: 'AddRoomController',
      templateUrl: 'templates/addRoom.tpl.html'
    })
    .state('root.editRoommates',{
      url: '/roommates/:name/edit',
      controller: 'EditRoomController',
      templateUrl: 'templates/editRoom.tpl.html'
    });
};
config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
export default config;