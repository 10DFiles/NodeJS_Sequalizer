var subcription = angular.module('Subcription_Manager', [ 'ngRoute' ]);

subcription.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'views/welcome.html',
		controller : "Subcription_Status"
	}).when('/subcription_status', {
		templateUrl : 'views/subcription_status.html',
		controller : "Subcription_Status"
	}).otherwise({
		redirectTo : 'welcome.html'
	});
} ]);
