"use strict";

let pageLoadAnim = ($timeout, $rootScope, $animate) => {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }      
    return {
        restrict: 'A',
        scope: false,
        link: (scope, elem, attrs) => {
            var $el = $(elem)
            console.log($el);
            
             $rootScope.$on("$viewContentLoaded", function(){
                $el.snabbt({
                delay: 500,
                easing: "ease",
                opacity: 1,
                fromOpacity: 0,
                duration: 1000,
                background: '#000',
                fromRotation: [0, 0, 0],
                rotation: [0, 0, 0],
                fromPosition: function() {
                    return _.map(
                        _.range(3, function(num) {
                            return getRandomInt(100, 300);
                        })
                    );
                },
                position: [0, 0, 0],
                fromScale: [5, 5],
                scale: [1, 1]
                });
             }); 
        }
    }
}

module.exports = pageLoadAnim;