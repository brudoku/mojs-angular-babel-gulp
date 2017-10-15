let mainCtrl = function($scope, $rootScope) {
    $scope.pages = ['listen', 'bio', 'media'];
    $scope.currentPage = '';

    $scope.isPageSelected = function(title) {
        return title === $scope.currentPage;
    }

    $scope.navClick = function(title) {
        $scope.currentPage = title;
    }
    $scope.doit = function() {
            console.log('tl')
            tl.play();

        }
        /*SQUARE*/
    let square3 = new mojs.Shape({
        shape: 'polygon',
        points: 5,
        fill: 'none',
        stroke: '#fff',
        duration: 1000,
        radius: { 0: 4, curve: 'cubic.in' },
        opacity: { 1: 1, curve: 'cubic.in' },
        strokeWidth: 1,
        y: 90
    });

    let tl = new mojs.Timeline();
    tl.add(square3)
}

module.exports = mainCtrl;