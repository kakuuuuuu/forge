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

  }
  $scope.search = function(game){
    $scope.games = {games:[game]}
    console.log(game)
    streamFactory.amazon(game, function(data){
      $scope.options=data;
    })
    console.log(game.name)
    streamFactory.search(game, function(streamer,game){
      $scope.streamer = streamer;
      console.log($scope.streamer)
      element.html("<iframe src='http://player.twitch.tv?channel={"+$scope.streamer+"}' height='400' width='100%'  frameborder='0' scrolling='no' allowfullscreen='true'></iframe>")
      console.log(game)

    })

  }

})
function xmlToJson(xml) {

	// Create the return object
	var obj = {};

	if (xml.nodeType == 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};
