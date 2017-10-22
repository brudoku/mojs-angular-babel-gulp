let mainCtrl = function($scope, $rootScope) {
    /*     $scope.list = [];
        let num = 0;
        $scope.add = function() {
            $scope.list.push(num);
            num++;
        } */
    $scope.pages = ['listen', 'bio', 'media'];
    $scope.currentPage = '';

    $scope.isPageSelected = function(title) {
        return title === $scope.currentPage;
    }
    $scope.navClick = function(title) {
        if (title !== $scope.currentPage) {
            $scope.$broadcast('page-changed-from', $scope.currentPage)
            $scope.currentPage = title;
        }
    }
    $scope.doit = function() {}
        // tl.play();
        /*     let square3 = new mojs.Shape({
                shape: 'polygon',
                points: 5,
                fill: 'red',
                stroke: '#fff',
                duration: 1000,
                radius: { 20: 40, curve: 'cubic.in' },
                opacity: { 1: 1, curve: 'cubic.in' },
                strokeWidth: { 1: 2 },
                angle: { 0: 50 },
                y: 90
            });

            let tl = new mojs.Timeline();
            tl.add(square3) */
}

module.exports = mainCtrl;