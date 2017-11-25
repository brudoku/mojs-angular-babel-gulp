"use strict";

let playerButtonAnim = ($timeout, $rootScope, $animate) => {
    return {
        restrict: 'A',
        scope: false,
        link: (scope, elem, attrs) => {
            var $el = $(elem);
            var bt = attrs.playerButtonAnim;
            var pos = {
                'prev' : [-20, 0, 0],
                'next' : [20, 0, 0],
                'play' : [0, -20, 0]
            };
            var runAnim = function(){
                $el.snabbt({
                  delay: 2000,
                  easing: "easeOut",
                  opacity: 1,
                  fromOpacity: 0,
                  duration: 1500,
                  fromPosition: pos[bt],
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