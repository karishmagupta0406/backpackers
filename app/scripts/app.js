'use strict';

/**
 * @ngdoc overview
 * @name getStartedApp
 * @description
 * # getStartedApp
 *
 * Main module of the application.
 */
angular
  .module('getStartedApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider  
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url:'/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })

      $urlRouterProvider.otherwise('/');
  
  });
