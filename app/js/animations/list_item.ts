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
                fromPosition: [fromPos, 0, 0],
                position: [0, 0, 0],
                duration: 250,
                fromScale: [0,0],
                scale: [1,1],
                
            });
            $timeout(function() {
                $elem.css('transform','none');
                done();
            }, 250)
        },
        leave: function(element, done) {
            var $elem = $(element);
            var toPos = $elem.attr('id') == 'listen' ? -300 : 300;            
            $elem.snabbt({
                easing: 'ease',
                fromOpacity: 1,
                opacity: 0,
                fromPosition: [0, 0, 0],
                position: [toPos, 0, 0],
                duration: 250,
                fromScale: [1,1],
                scale: [0,0],
            });            
        }
            
    }
}

module.exports = anim_list_item;