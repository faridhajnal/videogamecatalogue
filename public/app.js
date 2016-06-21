console.log('everything ok');

var app = angular.module('myApp', ['ngRoute']);


app.config(['$routeProvider', function(routeProvider){


	routeProvider

	.when('/videogames', {

		templateUrl : 'pages/videogames.html',
		controller: 'MainController'

	})

	.when('/videogames/:gameId', {

		templateUrl : 'pages/videogame-detail.html',
		controller: 'DetailController'

	})

	.otherwise({
		redirectTo : '/videogames'
	});
	

}]);

app.controller('MainController', ['$scope', '$http', function(scope,http){

	scope.message = 'Hola perro';

	http.get('json/videogames.json').success(function(data){

		console.log(data);
		scope.videogames = data;

	})


}]);

app.controller('DetailController', ['$scope', '$http', '$routeParams','$filter',
	function(scope,http,routeParams,filter){

	var id = routeParams.gameId;

	http.get('json/videogames.json').success(function(data){

		console.log(data);
		scope.videogame = filter('filter')(data, function(d){

			return d.id == id;

		})[0];

		scope.mainimage = scope.videogame.images[0].name;

		console.log(scope.mainimage);

		scope.numberofimages = scope.videogame.images.length;
		console.log(scope.videogame.images.length);

	});

	scope.setImage = function(image){

		scope.mainimage = image.name;

	}


}]);