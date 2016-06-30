var market_module = angular.module('black_market', ['ngRoute', 'ngStorage'])
////////////////////////////////////////////////routes provider////////////////////////////////////////////////
market_module.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
          templateUrl: 'partials/profile.html'
        })
        .when('/search',{
          templateUrl: 'partials/search.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
