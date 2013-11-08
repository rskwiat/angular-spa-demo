var SPA = angular.module('sampleSpa', []);


SPA.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/page1', {
			templateUrl: 'templates/page-1.html',
		}).
		when('/page2', {
			templateUrl: 'templates/page-2.html'
		}).
		otherwise({
			redirectTo: '/page1'
		});
	}]);