let navAnim = ($timeout, $rootScope) => {
    return {
        restrict: 'A',
        scope: {},
        link: (scope, elem, attrs) => {
            console.log(scope.$id);
            const timeline = new mojs.Timeline();
            
            const link1 = new mojs.Html({
                scale: { 0: 1 },
                delay: 1000,
                el: "#l-1",
                top: { "-200": 0 }
            });
            
            const link2 = new mojs.Html({
                scale: { 0: 1 },
                delay: 1000,
                el: "#l-2",
                top: { "200": 0 }
            });

            timeline.add(link1, link2);
            timeline.play();

        }
    }
}

module.exports = navAnim;