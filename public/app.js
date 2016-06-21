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

app.controller('MainController', ['$scope', function(scope){

	scope.message = 'Hola perro';


}]);

app.controller('DetailController', ['$scope', function(scope){

	scope.message = 'Hola perro';


}]);