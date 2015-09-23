angular.module ('myApp', [])
var mainControllerFunc = function($scope){

	$scope.newScript = {

		quote: '',
		author: '',
		rating:[]
	}


$scope.quotes = []


$scope.sortRating = function(){

	
}


$scope.clickSubmit = function(event){
	
if ($scope.newScript.quote != '' && $scope.newScript.author != ''){

	$scope.quotes.push($scope.newScript);
	$scope.newScript = ''
}
	console.log('Clicked it!')

}





}
angular.module('myApp').controller('mainController' , ['$scope', mainControllerFunc])


