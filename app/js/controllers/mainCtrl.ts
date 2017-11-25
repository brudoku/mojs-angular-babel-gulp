let mainCtrl = function($scope, $rootScope, $state, $timeout, lazyService, Utility) {
    // lazyService.lazyFn().then(function(response) {
        // console.log(response); --> -----deferred.resolve-----
    // });
    $scope.currentPage = "";
    $scope.isPageSelected = function(title) {
        return title === $scope.currentPage;
    };
    $scope.navClick = function(title) {
        if (title !== $scope.currentPage) {
            $scope.$broadcast("page-changed-from", $scope.currentPage);
            $scope.currentPage = title;
        }
    };
};

module.exports = mainCtrl;