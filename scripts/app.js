var todoApp = angular.module('todoApp', ['todoApp.filters', 'todoApp.filters2', 'ngRoute'])
//'ui, ui.filters'

todoApp.config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
    .when("/home", {
        templateUrl : "views/home.html"
    })
    .when("/addlist", {
        templateUrl : "views/Addlist.html",
        controller: "addlistController"
    })
    .when("/categories", {
        templateUrl : "views/categories.html",
        controller: "HomeController"
    })
    .otherwise({
        redirectTo: 'home.html',
    });
});

