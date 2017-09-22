let NumberSquarer = require('../libs/NumberSquarer.js');

let mainCtrl = function($scope) {
	let	count = 1;
	$scope.values = [];
	$scope.addValue = function(){
		$scope.values.push(NumberSquarer(NumberSquarer(count)));
		count++;
	}
}

module.exports = mainCtrl;