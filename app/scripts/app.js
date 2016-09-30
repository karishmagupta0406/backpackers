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
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'module/home/home.html',
                controller: 'homeCtrl'
            })
            .state('packages', {
                url: '/packages',
                templateUrl: 'module/packages/packages.html',
                controller: 'packagesCtrl'
            })
             .state('contact', {
                url: '/contact',
                templateUrl: 'module/contact/contact.html',
                 controller: 'contactCtrl'
             })

        $urlRouterProvider.otherwise('/');

    });
