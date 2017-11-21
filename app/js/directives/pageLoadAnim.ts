"use strict";

let pageLoadAnim = ($timeout, $rootScope, $animate) => {
    return {
        restrict: 'A',
        scope: false,
        link: (scope, elem, attrs) => {
            var $el = $(elem)
      
            console.log($el);
            
             $rootScope.$on("$viewContentLoaded", function(){
                 $timeout(function () {
                     console.log("$viewContentLoaded=========");
                      $animate.addClass($el, 'player-active');
                 },2000)
             }); 
        }
    }
}

module.exports = pageLoadAnim;