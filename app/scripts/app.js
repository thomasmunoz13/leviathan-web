'use strict';

/**
 * @ngdoc overview
 * @name boutonRougeClientApp
 * @description
 * # boutonRougeClientApp
 *
 * Main module of the application.
 */
angular
  .module('levithanWeb', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      }).when('/panel', {
        templateUrl: 'views/panel.html',
        controller: 'PanelCtrl',
        controllerAs: 'panel'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
