let mainCtrl = function($scope, $rootScope, $state, $timeout, lazyService, Utility) {

    lazyService.lazyFn().then(function(response) {
        console.log(response);
    });

    $scope.pages = ["listen", "bio", "media"];
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
    $scope.trackSelect = function() {
        $scope.$broadcast("page-changed-from");
    };

    $scope.$on("directive-loaded", function() {
        console.log("directive loaded");
    });
};;

module.exports = mainCtrl;