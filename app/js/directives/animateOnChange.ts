'use strict';

var animateOnChange = function($animate, $compile) {
  var watchers = {};
  return {
    restrict: "A",
    link: function(scope, element, attrs) {
      watchers[scope.$id] && watchers[scope.$id](); // deregister `$watch`er if one already exists
      watchers[scope.$id] = scope.$watch(attrs.animateOnChange, function(
        newValue,
        oldValue
      ) {
        if (newValue !== oldValue) {

          $animate.enter(
            $compile(element.clone())(scope),
            element.parent(),
            element
          );
          element.html(oldValue);
          $animate.leave(element);
        }
      });
    }
  };
};

module.exports = animateOnChange;
/*           var $oldEl = $($compile(element.clone())(scope));
          console.log($newEl)
          var $newEl = $(element.html(oldValue));
          console.log($oldEl);
          
          $newEl.snabbt({
            duration: 1000,
            easing: "ease",
            opacity: 1,
            fromOpacity: 0,
            fromScale: [0, 0],
            scale: [1, 1]
          });

          $oldEl.snabbt({
            duration: 1000,
            easing: "ease",
            opacity: 0,
            fromOpacity: 1,
            fromScale: [1, 1],
            scale: [0, 0],
            background: '#000'
          }); */
