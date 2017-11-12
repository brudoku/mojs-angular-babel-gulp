let mainCtrl = function($scope, lazy) {
    // setTimeout(function() {
    // console.log(lazy());
    console.log('@@@@@@@@@@@@@@@@@@');
    console.log(lazy);

    // }, 3000);
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


};

module.exports = mainCtrl;