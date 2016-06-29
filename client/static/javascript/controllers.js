market_module.controller('registerController', function($scope, userFactory, $localStorage, $location, $window){
  userFactory.getUser(function(data){
    $scope.user=data;
    console.log($scope.user)
  })
})
market_module.controller('profileController', function($scope, userFactory, $location){
  $scope.logout = function(){
    $location.url('/')


  }
  if("user" in localStorage){
    //grabs current user from localStorage if logged in
    $scope.user = JSON.parse(localStorage.user);
    console.log($scope.user)
  }
  else {
    //redirects if user is not logged in
   $location.url('/')
  }

  console.log($scope.user.local.email)
})
