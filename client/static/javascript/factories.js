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
  factory.register = function(info){
    $http.post('/register',info).success(function($http){
      if($http.status==false){
        error.push($http.error)
      }
      else{
        console.log('success')
        localStorage.user = JSON.stringify($http);
        console.log(JSON.parse(localStorage.user))
        console.log($http)
        error.pop();
        $location.url('/profile')
      }
    })
  }
  factory.login = function(info){
    $http.post('/login', info).success(function($http){
      if($http.status == false){
        error.push($http.error)
      }
      else{
        localStorage.user = JSON.stringify($http);
        error.pop();
        $location.url('/profile')
      }
    })
  }
  factory.getError = function(){
    return error;
  }
  factory.facebook = function() {
    // $http.get('/auth/facebook').success(function(output){
    //   localStorage.user = JSON.stringify(output);
    //   $location.url('/profile')
    // })

        $http({
          url: '/auth/facebook',
          method: 'GET',
          withCredentials: true,
          headers: {
            'Access-Control-Allow-Origin': true,
            'Content-Type': 'application/json; charset=utf-8'
          }
        }).then(function(){
          $location.url('/profile')
        })
    };
  factory.twitter = function(){
    $http.get('/auth/twitter').success(function(output){
      localStorage.user = JSON.stringify(output);
      $location.url('/profile')
    })
  }
//   factory.facebook = function() {
//     $window.location = $window.location.protocol + "//" + $window.location.host + $window.location.pathname + "auth/facebook";
// };
  return factory;
})
