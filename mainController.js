'use strict';

//included theme
var personalWebsite = angular.module('personalWebsite', ['ngRoute', 'ngMaterial', 'ngResource']).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('light-green')
        .accentPalette('orange');
});

personalWebsite.controller('MainController', ['$scope', '$location', '$resource',
	function($scope, $location, $resource) {
    $scope.sendMessage = function(){
		window.open('mailto:raguiar1000@gmail.com?subject=subject&body='+$scope.message);
	}
}]);



