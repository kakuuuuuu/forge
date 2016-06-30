market_module.controller('registerController', function($scope, userFactory, $localStorage, $location, $window){
  userFactory.getUser(function(data){
    $scope.user=data;
    console.log($scope.user)
  })
})
market_module.controller('streamsController', function($scope, userFactory, streamFactory, $routeParams){
  var element = angular.element(document.querySelector('#stream'));

  // element.html("<iframe src="+$scope.topStream+" height='400' width='680' frameborder='0' scrolling='no' allowfullscreen='true'></iframe>")
  $scope.gameSearch = function(data){
    $scope.options=[];
    console.log('hi')
    streamFactory.gameSearch($scope.newSearch, function(games){
      $scope.games = games;
      })
    $scope.newSearch = '';
  }
  $scope.search = function(game){
    $scope.games = {games:[game]}
    console.log(game)
    $scope.streamgame = game.name
    streamFactory.amazon(game, function(data){
      $scope.options=data;
    })
    console.log(game.name)
    streamFactory.search(game, function(streamer,game){
      console.log('streamer '+streamer)
      $scope.streamer = streamer;
      console.log($scope.streamer)
      element.html("<iframe src='http://player.twitch.tv?channel={"+$scope.streamer+"}' height='400' width='100%'  frameborder='0' scrolling='no' allowfullscreen='true'></iframe>")
      console.log(game)

    })

  }

})
