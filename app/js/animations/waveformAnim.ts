'use strict';

var waveAnim = function($timeout) {
  return {
    enter: function(element, done) {
      var $el = $(element);
      $el.snabbt({
        easing: "linear",
        opacity: 1,
        fromOpacity: 0,
        duration: 1000,
        fromPosition: [0, 100, 0],
        position: [0, 0, 0]
      });
      $timeout(function() {
        $el.css("transform", "none");
        done();
      }, 1000);
    },
    leave: function(element, done) {
      var $el = $(element);
      $el.snabbt({
        easing: "linear",
        fromOpacity: 0.5,
        opacity: 0,
        duration: 1000,
        fromPosition: [0, 0, 0],
        position: [0, -100, 0]
      });
      $timeout(function() {
        $el.css("transform", "none");
        done();
      }, 1000);
    }
  };
};

module.exports = waveAnim;