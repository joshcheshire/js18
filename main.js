angular.module ('myApp', [])
var mainControllerFunc = function($scope){

	$scope.newScript = {

		quote: '',
		author: '',
		rating:[]
	}


$scope.quotes = []

$scope.showPopup = false
// $scope.myArray = ['Quote 1', 'Quote 2', 'Quote 3', 'Quote 4', 'Quote 5']





$scope.randomQuotes = [
	{
		quote  : 'This is the fucking shit',
		author : 'Alex'
	},

	{   quote: 'Thanks to you',
		author: 'Me'
	},
	{	quote: 'Random ass quote',
		author: 'Larry'
	} 

]

	





$scope.randomQuote = ''


$scope.getRandomQuote = function(event){

	$scope.showPopup = !$scope.showPopup;
	console.log("random getter")

	

	 $scope.randomQ = function(){

	 	// $scope.randomQuotes.Math.floor(Math.random() * $scope.randomQuotes.length);
		
		// $scope.randomQuotesArray.push($scope.randomQuotes)
		// $scope.randomQuote = $scope.quotes[0]
		// accessing the quotes array is your issue
		$scope.randomQuote = $scope.randomQuotes[Math.floor(Math.random() * $scope.randomQuotes.length)]
	}()
		return ($scope.randomQuote)


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


// var 

// var randomQ = myArray[Math.floor(Math.random() * myArray.length)];
// console.log(randomQ)