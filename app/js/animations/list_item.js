'use strict';

var anim_list_item = function($timeout) {
    return {
        enter: function(element, done) {
            var $elem = $(element);
            $elem.css('position', 'relative');
            $elem.snabbt({
                easing: 'spring',
                springConstant: 0.8,
                springDeceleration: 0.8,
                springMass: 10,
                opacity: 1,
                fromOpacity: 0,
                fromPosition: [0, 100, 0],
                position: [0, 0, 0],
                duration: 250,
                fromScale: [0.5, 0.5],
                scale: [1, 1]
            });
            $timeout(function() {
                done();
            }, 500)
        }
    }
}

module.exports = anim_list_item;