/* Sample Controller */
app.controller('myListController', ['$scope', '$http',  function($scope, $http) {
    $scope.movieList = null;

	$http.get('./data/imdb250.json').
	  success(function(data) {
	  	$scope.movieList = data;
	  }). 
	  error(function(err) {
	  	console.log(err);
	  });

	$scope.sortOptions = [
        {
            "id": "title",
            "label": "Title"
        },
        {
            "id": "rank",
            "label": "Rank"
        }
  	];
  	$scope.sortOption = $scope.sortOptions[0];

  	$scope.reverseOptions = [
        {
            "id": "true",
            "label": "Ascending"
        },
        {
            "id": "",
            "label": "Descending"
        }
  	];
  	$scope.reverseOption = $scope.reverseOptions[1];

}]);

app.controller('myMainController', ['$scope', function($scope){

}]);

app.controller('myGalleryController', ['$scope', '$http',  function($scope, $http){
    $scope.movieList = null;

    $http.get('./data/imdb250.json').
	  success(function(data) {
	  	$scope.movieList = data;
	  }).
	  error(function(err) {
	  	console.log(err);
	  });
}]);


app.controller('myDetailsController', ['$scope', '$http', '$routeParams', '$filter',  function($scope, $http, $routeParams, $filter) {
    $scope.movieId = $routeParams.movie_id;
    $scope.movie = null;
    $scope.higher = null;
    $scope.lower = null;

    $http.get('./data/imdb250.json').
	  success(function(data) {
	  	$scope.movie = $filter('filter')(data, function (d) {
	  		return d.imdbID === $scope.movieId;
	  	})[0];
	  	$scope.higher = $filter('filter')(data, function (d) {
	  		return d.rank === ($scope.movie.rank + 1);
	  	})[0];
	  	console.log($scope.movie);
	  	$scope.lower = $filter('filter')(data, function (d) {
	  		return d.rank === ($scope.movie.rank - 1);
	  	})[0];

	  }).
	  error(function(err) {
	  	console.log(err);
	  });


}]); 