market_module.factory('userFactory', function($http, $location, $window){
  var factory = {};
  var user = null;
  var error = [];
  factory.getUser = function(callback){
    $http.get('/getuser').success(function(output){
      user = output;
      callback(user)
    })
  }
  return factory;
})
market_module.factory('streamFactory', function($http, $location){
  var streams = [];
  var factory = {};
  factory.gameSearch = function(search, callback){
    $http.get('https://api.twitch.tv/kraken/search/games?q=' + search + '&type=suggest').success(function(http){
      callback(http)
    })
  }
  factory.search = function(game, callback){
    $http.get('https://api.twitch.tv/kraken/streams?game=' + game.name).success(function(http){
      callback(http.streams[0].channel.name, game)
    })
  }
  factory.amazon = function(game, callback){
    info={name:game.name}
    $http.post('/searchgames',info).success(function($http){
      callback($http)
    })
  }
  return factory;
})
