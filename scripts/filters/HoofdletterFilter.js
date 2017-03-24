var todoAppFilters = angular.module('todoApp.HoofdletterFilter', []);

todoAppFilters.filter('hoofdletterFilter', function() {
	
	return function(input) {
		console.log("input " + input);
		var test =  input.charAt(0).toUpperCase() + input.slice(1);
		return test;
	};

});