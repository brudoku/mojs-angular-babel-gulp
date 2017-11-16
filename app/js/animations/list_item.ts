'use strict';

var anim_list_item = function($timeout) {
    return {
        enter: function(element, done) {
            var $elem = $(element);
            var fromPos = $elem.attr('id') == 'listen' ? -300 : 300;
            $elem.snabbt({
                easing: 'ease',
                opacity: 1,
                fromOpacity: 0,
                // fromPosition: [fromPos, 0, 0],
                // position: [0, 0, 0],
                duration: 1000,
                // fromScale: [0,0],
                // scale: [1,1],
                fromRotation: [0, 0, Math.PI/2],
                rotation: [0, 0, 0]
                
            });
            $timeout(function() {
                $elem.css('transform','none');
                done();
            }, 1000)
        },
        leave: function(element, done) {
            var $elem = $(element);
            var toPos = $elem.attr('id') == 'listen' ? -300 : 300;            
            $elem.snabbt({
                easing: 'ease',
                fromOpacity: 1,
                opacity: 0,
                // fromPosition: [0, 0, 0],
                // position: [toPos, 0, 0],
                duration: 1000,
                // fromScale: [1,1],
                // scale: [0,0],
                fromRotation: [0, 0, 0],
                rotation: [0, 0, Math.PI/2]
            });            
            $timeout(function() {
              $elem.css("transform", "none");
              done();
            }, 1000);            
        }
            
    }
}

module.exports = anim_list_item;