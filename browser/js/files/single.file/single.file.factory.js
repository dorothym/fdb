app.factory('SingleFile', function($http){
  console.log("in single file factory")
  
  var SingleFile = {};
  
  SingleFile.getFile = function(id){
    console.log("in singleFile getFile",id)
    return $http.get('/api/files/' + id)
    .then(function(res){
      return res.data;
    },
    function(err) {
      console.error("Error in getFile",err)
    });
  }
  
  // SingleFile.getRatings = function (id){
  //   return $http.get('/api/files/' + id + '/rating')
  //   .then(function(res){
  //     return res.data
  //   })
  // }
   
  // SingleFile.getAvgRating = function (ratings){
  //   if (ratings.length === 0) return 0;
  //   var sum = ratings.reduce(function(prev, curr){
  //     return Number(prev.rating) + Number(curr.rating);
  //   });
  //   return Math.floor(sum/ratings.length)
  // }
  
  // SingleFile.getChef = function (id){
  //   return $http.get('/api/files/' + id)
  //   .then(function(res){
  //     return res.data.chef;
  //   });
  // }
  
  return SingleFile;
  
});
