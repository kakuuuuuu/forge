var market_module = angular.module('black_market', ['ngRoute', 'ngStorage'])
////////////////////////////////////////////////routes provider////////////////////////////////////////////////
market_module.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
            templateUrl: 'partials/landing.html'
        })
        .when('/login',{
            templateUrl: 'partials/login.html'
        })
        .when('/register',{
            templateUrl: 'partials/register.html'
        })
        .when('/profile',{
            templateUrl: 'partials/profile.html'
        })
        .when('/connect',{
            templateUrl: 'partials/connect-local.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
