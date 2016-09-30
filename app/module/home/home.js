'use strict';

/**
 * @ngdoc function
 * @name getStartedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the getStartedApp
 */
angular.module('getStartedApp')
  .controller('homeCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
