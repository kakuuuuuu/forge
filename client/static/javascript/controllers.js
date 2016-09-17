market_module.controller('registerController', function($scope, userFactory, $localStorage, $location, $window){
  userFactory.getUser(function(data){
    $scope.user=data;
  })
})
market_module.controller('streamsController', function($scope, userFactory, streamFactory, $routeParams){
  var element = angular.element(document.querySelector('#stream'));

  // element.html("<iframe src="+$scope.topStream+" height='400' width='680' frameborder='0' scrolling='no' allowfullscreen='true'></iframe>")
  $scope.gameSearch = function(data){
    $scope.options=[];
    streamFactory.gameSearch($scope.newSearch, function(games){
      $scope.games = games;
      })
    $scope.newSearch = '';
  }
  $scope.search = function(game){
    $scope.games = {games:[game]}

    streamFactory.amazon(game, function(data){
      $scope.options=data;
    })
    streamFactory.search(game, function(streamer,game){
      if(streamer!='nothing'){
        $scope.streamer = streamer;
        element.html("<iframe src='http://player.twitch.tv?channel={"+$scope.streamer+"}&client_id=4xtcv9zworz1rgi4uqrqj3lzgnc4zyi' height='400' width='100%'  frameborder='0' scrolling='no' allowfullscreen='true'></iframe>")
        $scope.streamgame = game.name
      }
    })

  }

})
