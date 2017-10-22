'use strict';

var anim_list_item = function($timeout) {
    return {
        enter: function(element, done) {
            var $elem = $(element);
            $elem.snabbt({
                easing: 'ease',
                opacity: 1,
                fromOpacity: 0,
                fromPosition: [-300, 0, 0],
                position: [0, 0, 0],
                duration: 250,
            });
            $timeout(function() {
                // $elem.css('z-index',1);
                $elem.css('transform','none');
                done();
            }, 500)
        },
        leave: function(element, done) {
            var $elem = $(element);
            $elem.snabbt({
                easing: 'ease',
                fromOpacity: 1,
                opacity: 0,
                fromPosition: [0, 0, 0],
                position: [300, 0, 0],
                duration: 250,

            });            
        }
            
    }
}

module.exports = anim_list_item;