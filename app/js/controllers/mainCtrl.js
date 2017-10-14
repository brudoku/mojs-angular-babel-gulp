let NumberSquarer = require('../libs/NumberSquarer.js');

let mainCtrl = function($scope) {
    $scope.pages = ['listen', 'bio', 'media'];
    $scope.currentPage = $scope.pages[0]

    $scope.isPageSelected = function(title) {
        return title === $scope.currentPage;
    }

    $scope.navClick = function(title) {
        $scope.currentPage = title;
    }
}

module.exports = mainCtrl;