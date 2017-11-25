'use strict';

var anim_list_item = function($timeout) {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return {
        enter: function(element, done) {
            var $elem = $(element);
             var delay = $elem.index() * 100;
            // var fromPos = $elem.attr('id') == 'listen' ? -300 : 300;
            $elem.snabbt({
                delay: delay,
                easing: 'ease',
                opacity: 1,
                fromOpacity: 0,
                duration: 1000,
                fromRotation: [0,0,0],
                rotation: [0, 0, 0],
                fromPosition: function(){
                    return _.map(_.range(3, function(num) {
                        return getRandomInt(100, 300)
                    }))

                },
                position: [0, 0, 0],
                fromScale: [5,5],
                scale: [1,1],
                
            });
            $timeout(function() {
                $elem.css('transform','none');
                done();
            }, 1000)
        },
        leave: function(element, done) {
            var $elem = $(element);
            $elem.snabbt({
                easing: 'ease',
                fromOpacity: 1,
                opacity: 0,
                duration: 1000,
                fromRotation: [0, 0, 0],
                rotation: [0, 0, Math.PI/2]
            });            
            $timeout(function() {
              $elem.css("transform", "none");
              done();
            }, 1000);            
        }/* , 
        addClass: function (element, className, done) {
            var $elem = $(element);
            $elem.snabbt({
              easing: "ease",
              opacity: 1,
              fromOpacity: 0,
              duration: 1000,
              fromPosition: [0, 0, 0],
              position: [0, 0, 0],
            });
            $timeout(function() {
              $elem.css("transform", "none");
              done();
            }, 1000);      
        } */
            
    }
}

module.exports = anim_list_item;