"use strict";

let logoLoadAnim = ($timeout, $rootScope, $animate) => {
    return {
        restrict: 'A',
        scope: false,
        link: (scope, elem, attrs) => {
            var $el = $(elem)
            $el.snabbt({
              delay: 500,
              duration: 500,
              fromOpacity: 0,
              opacity: 1,
              rotation: [0, 0, 0],
              position: [0, 0, 0]
            });
        }
    }
}

module.exports = logoLoadAnim;