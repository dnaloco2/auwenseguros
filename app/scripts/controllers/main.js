define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name auwensegurosApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the auwensegurosApp
   */
  angular.module('auwensegurosApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
