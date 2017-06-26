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

personalWebsite.controller('MainController', ['$scope', '$location', '$resource',
	function($scope, $location, $resource) {
    console.log("HERE")
    $scope.sendMessage = function(){
		console.log($scope.message);
	}

	}]);



