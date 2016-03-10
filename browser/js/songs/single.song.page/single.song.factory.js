app.factory('SingleSong', function($http){
  
  var SingleSong = {};
  
  SingleSong.getSong = function(id){
    return $http.get('/api/songs/' + id)
    .then(function(res){
      return res.data.Song;
    });
  }
  
  SingleSong.getRatings = function (id){
    return $http.get('/api/songs/' + id + '/rating')
    .then(function(res){
      return res.data
    })
  }
   
  SingleSong.getAvgRating = function (ratings){
    if (ratings.length === 0) return 0;
    var sum = ratings.reduce(function(prev, curr){
      return Number(prev.rating) + Number(curr.rating);
    });
    return Math.floor(sum/ratings.length)
  }
  
  SingleSong.getChef = function (id){
    return $http.get('/api/songs/' + id)
    .then(function(res){
      return res.data.chef;
    });
  }
  
  return SingleSong;
  
});
