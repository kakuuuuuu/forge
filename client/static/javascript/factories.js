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
    $http.get('https://api.twitch.tv/kraken/search/games?q=' + search + '&type=suggest&client_id=4xtcv9zworz1rgi4uqrqj3lzgnc4zyi').success(function(http){
      callback(http)
    })
  }
  factory.search = function(game, callback){
    $http.get('https://api.twitch.tv/kraken/streams?game=' + game.name+"&client_id=4xtcv9zworz1rgi4uqrqj3lzgnc4zyi").success(function(http){
      if(http.streams.length>0){
        callback(http.streams[0].channel.name, game)
      }
      else{
        callback('nothing', game)
      }
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
