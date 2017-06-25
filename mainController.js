'use strict';

//included theme
var nameReminderApp = angular.module('nameReminderApp', ['ngRoute', 'ngMaterial', 'ngResource']).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('light-green')
        .accentPalette('orange');
});

nameReminderApp.config(['$routeProvider', '$resourceProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            title: 'Home',
            templateUrl: 'index.html',
            controller: 'MainController.js'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

nameReminderApp.controller('MainController', ['$scope', '$rootScope', '$location', '$routeParams', '$resource', '$http',
	function($scope, $rootScope, $location, $routeParams, $resource, $http) {
        console.log("HERE")
	}]);


