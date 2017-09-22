var NumberSquarer = require('../libs/NumberSquarer.js');

var otherCtrl = function($scope) {
	var	count = 2;
	$scope.values = [];
	$scope.addValue = function(){
		$scope.values.push(NumberSquarer(count));
		count++;
	}
}

module.exports = otherCtrl;
