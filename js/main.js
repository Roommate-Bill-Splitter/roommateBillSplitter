import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import config from './config';
import 'sweetalert';
import 'angular-h-sweetalert';
//controllers
import HomeController from './controllers/home_controller';
import DashController from './controllers/dash_controller';
import ChartController from './controllers/chart_controller';
import BillsController from './controllers/bills_controller';
import IndBillController from './controllers/ind_bill_controller';
import AddBillController from './controllers/add_bill_controller';
import EditBillController from './controllers/edit_bill_controller';
import RoomController from './controllers/room_controller';
import RoomBillController from './controllers/room_bill_controller';
import AddRoomController from './controllers/add_room_controller';
import EditRoomController from './controllers/edit_room_controller';

//Services
import RoomService from './services/room_service';
import ChartService from './services/chart_service';








angular
  .module('app', ['ui.router', 'ngCookies', 'hSweetAlert'])
  .constant('SERVER', {
    URL: 'taco',
    CONFIG:{
      empty: 'fornow'
    }
  })
  .config(config)
  .controller('HomeController', HomeController)
  .controller('DashController', DashController)
  .controller('ChartController', ChartController)
  .controller('BillsController', BillsController)
  .controller('IndBillController', IndBillController)
  .controller('AddBillController', AddBillController)
  .controller('EditBillController', EditBillController)
  .controller('RoomController', RoomController)
  .controller('RoomBillController', RoomBillController)
  .controller('AddRoomController', AddRoomController)
  .controller('EditRoomController', EditRoomController)

  .service('RoomService', RoomService)
  .service('ChartService', ChartService)
;
