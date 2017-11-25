"use strict";

let playerLoadAnim = ($timeout, $rootScope, $animate) => {
    return {
        restrict: 'A',
        scope: false,
        link: (scope, elem, attrs) => {
            var $el = $(elem)
            $el.snabbt({
              delay: 500,
              easing: "ease",
              duration: 500,
              fromOpacity: 0,
              opacity: 1,              
              fromRotation: [0, 0, 0],
              rotation: [0, 0, 0],
              fromPosition: [0, 20, 0],
              position: [0, 0, 0],
            })
                
            runAnim();
            // $rootScope.$on("anim-player-loaded", function() {
            // //   timeline.play();
            // });  
            $rootScope.$broadcast("anim-player-loaded"); 
        }
    }
}

module.exports = playerLoadAnim;