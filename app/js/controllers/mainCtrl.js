let mainCtrl = function($scope, $rootScope, lazy) {
    console.log("mainctrl -------------");
    setTimeout(function() {
        console.log('@@@@@@@@@@@@@@@@@@');
        console.log(lazy);
    }, 7000);
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
};

module.exports = mainCtrl;