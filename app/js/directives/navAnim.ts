let navAnim = ($timeout, $rootScope) => {
    return {
        restrict: 'A',
        scope: {},
        link: (scope, elem, attrs) => {
            const timeline = new mojs.Timeline();
            
            const link1 = new mojs.Html({
                scale: { 0: 1 },
                delay: 500,
                duration: 750,
                el: "#prev",
                top: { "-200": 0 }
            });
            
            const link2 = new mojs.Html({
                scale: { 0: 1 },
                delay: 750,
                duration: 500,
                el: "#next",
                top: { "200": 0 }
            });

            timeline.add(link1, link2);
            $rootScope.$on("anim-player-loaded", function() {
                timeline.play();
            });             
        }
    }
}

module.exports = navAnim;