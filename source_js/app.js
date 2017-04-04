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
        .when('/typography', { 
            templateUrl : 'partials/typography.html',
            controller: 'myTypographyController'
        })
        .when('/videos', {
            templateUrl : 'partials/videos.html'
        })
        .when('/writing', {
            templateUrl : 'partials/writing.html'
        })        
        .when('/resume', {
            templateUrl : 'partials/resume.html'
        })
        .when('/article_quotes', {
            templateUrl : 'partials/article_quotes.html'
        })
        .when('/article_planes', {
            templateUrl : 'partials/article_planes.html'
        })
        .otherwise({
            redirectTo: '/main'
        });
})



