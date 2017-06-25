'use strict';

//included theme
var personalWebsite = angular.module('personalWebsite', ['ngRoute', 'ngMaterial', 'ngResource']).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('light-green')
        .accentPalette('orange');
});

// personalWebsite.config(['$routeProvider', '$resourceProvider',
//     function($routeProvider) {
//         $routeProvider.
//         when('/', {
//             title: 'Home',
//             templateUrl: 'index.html',
//             controller: 'MainController.js'
//         }).
//         otherwise({
//             redirectTo: '/'
//         });
//     }
// ]);

personalWebsite.controller('MainController', ['$scope', '$rootScope', '$location', '$routeParams', '$resource', '$http',
	function($scope, $rootScope, $location, $routeParams, $resource, $http) {
        console.log("HERE")
	}]);


