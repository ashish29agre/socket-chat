'use strict';

var app = angular.module('SocketChatApp', []);
app.config(function($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
             .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
             .when('/404', {
                templateUrl: 'views/404.html',
                controller: '404Ctrl'
            })
            .otherwise({
                redirectTo: '/404'
            });
});
