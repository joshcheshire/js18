angular.module ('myApp', [])
var mainControllerFunc = function($scope){

	$scope.newScript = {

		quote: '',
		author: '',
	}



$scope.quotes = []




$scope.clickSubmit = function(event){
	
if ($scope.newScript.quote != '' && $scope.newScript.author != ''){

	$scope.quotes.push($scope.newScript);
	$scope.newScript = ''
}



	console.log('Clicked it!')

}





}
angular.module('myApp').controller('mainController' , ['$scope', mainControllerFunc])


//maybe add an ng-hide from the text boxes on click

// on click submit, alert if not correct;

//
