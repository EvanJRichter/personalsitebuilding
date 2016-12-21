var app = angular.module('siteapp',['ngRoute']);
    app.config(function ($routeProvider) {
    $routeProvider
        .when('/main', { 
            templateUrl : 'partials/main.html',
            controller: 'myMainController'
        })        
        .when('/projects', {
            templateUrl : 'partials/projects.html'
        })
        .when('/design', {
            templateUrl : 'partials/design.html'
        })
        .when('/photography', {
            templateUrl : 'partials/photography.html'
        })
        .when('/artwork', { 
            templateUrl : 'partials/artwork.html'
        })
        .when('/videos', {
            templateUrl : 'partials/videos.html'
        })
        .when('/writing', {
            templateUrl : 'partials/writing.html'
        })
        .otherwise({
            redirectTo: '/main'
        });
})



