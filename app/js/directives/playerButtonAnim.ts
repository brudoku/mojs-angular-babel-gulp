"use strict";

let playerButtonAnim = ($timeout, $rootScope, $animate) => {
    return {
        restrict: 'A',
        scope: false,
        link: (scope, elem, attrs) => {
            var $el = $(elem);
            var bt = attrs.playerButtonAnim;
            var pos = {
                'prev' : -20,
                'next' : 20,
                'play' : 0
            };
            var runAnim = function(){
                $el.snabbt({
                  delay: 2000,
                  easing: "ease",
                  opacity: 1,
                  fromOpacity: 0,
                  duration: 500,
                  background: "#000",
                  fromRotation: [0, 0, 0],
                  rotation: [Math.PI , Math.PI , Math.PI ],
                  fromPosition: [pos[bt], 0, 0],
                  position: [0, 0, 0],
                });
            }
            $rootScope.$on("anim-player-loaded", function(){
                runAnim();
            }); 
        }
    }
}

module.exports = playerButtonAnim;