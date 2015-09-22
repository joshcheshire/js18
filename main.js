angular.module ('myApp', [])
var mainControllerFunc = function($scope){










$scope.clickSubmit = function(event){
	




	console.log('Clicked it!')

}





}
angular.module('myApp').controller('mainController' , ['$scope', mainControllerFunc])


//maybe add an ng-hide from the text boxes on click

// on click submit, alert if not correct;

//
