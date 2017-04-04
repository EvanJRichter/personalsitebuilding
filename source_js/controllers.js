/* Sample Controller */
app.controller('myTypographyController', ['$scope',  function($scope) {
    $scope.text = "NO USE AS A WEBFONT - 
	You may not make the Font Software accessible on a web server in order to enable
	a web browser to render the content of Websites using the respective Font
	Software."
	$scope.gentext = [];
	// $scope.generateText = function () {
	//     for (var i = 0, len = $scope.text.length; i < len; i++) {
	// 		$scope.gentext.push($scope.text[i])
	// 	}
	// };


    $scope.changeText = function(c){
    	for (var i = 0, len = $scope.text.length; i < len; i++) {
			if ($scope.text[i] === c){
				var nucode = Math.round(Math.random() * (90-65)) + 65
				$scope.text = $scope.text.substr(0, i) + String.fromCharCode(nucode) + $scope.text.substr(i + 1);
			
			}
		} //65-90
    }
}]);

app.controller('myMainController', ['$scope', function($scope){

}]);
