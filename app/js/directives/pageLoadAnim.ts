"use strict";

let pageLoadAnim = ($timeout, $rootScope, $animate) => {
    return {
        restrict: 'A',
        scope: false,
        link: (scope, elem, attrs) => {
            var $el = $(elem)
            $el.snabbt({
            delay: 1000,
            easing: "ease",
            opacity: 1,
            fromOpacity: 0,
            duration: 2000,
            background: '#000',
            fromRotation: [0, 0, 0],
            rotation: [0, 0, 0],
            fromPosition: [0,0,0],
            position: [0, 0, 0],
            fromScale: [3, 3],
            scale: [1, 1]
            });
            $rootScope.$on("$viewContentLoaded", function(){
            }); 
        }
    }
}

module.exports = pageLoadAnim;