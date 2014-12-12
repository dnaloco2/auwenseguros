define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name auwensegurosApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the auwensegurosApp
   */
  angular.module('auwensegurosApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
