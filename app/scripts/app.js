/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about']/*deps*/, function (angular, MainCtrl, AboutCtrl)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name auwensegurosApp
   * @description
   * # auwensegurosApp
   *
   * Main module of the application.
   */
  return angular
    .module('auwensegurosApp', ['auwensegurosApp.controllers.MainCtrl',
'auwensegurosApp.controllers.AboutCtrl',
/*angJSDeps*/
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ngTouch'
  ])
    .config(['$routeProvider', '$locationProvider',function ($routeProvider, $locationProvider) {
      $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
      });


      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
        })
        .when('/produtos', {
          templateUrl: 'views/produtos.html',
          controller: 'HomeCtrl'
        })
        .when('/servicos', {
          templateUrl: 'views/servicos.html',
          controller: 'HomeCtrl'
        })
        .when('/atendimento', {
          templateUrl: 'views/atendimento.html',
          controller: 'HomeCtrl'
        })
        .when('/ajuda', {
          templateUrl: 'views/ajuda.html',
          controller: 'HomeCtrl'
        })
        .when('/paracorretores', {
          templateUrl: 'views/paracorretores.html',
          controller: 'HomeCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    }]);
});
