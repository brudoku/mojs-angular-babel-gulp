'use strict';

let loader = function($timeout,$rootScope) {
    return {
      restrict: 'A',
      template: '<div id="oneloader" class="hiddenload">loading yo...</div>',
      replace: true,
      scope: false,
      link: function (scope, element, attrs) {
        console.log('link')
        // $timeout(function(){
          scope.$on('$stateChangeStart',
                  function(event, toState, toParams, fromState, fromParams){
                    console.log('loader start')
                      $("#oneloader").removeClass("hiddenload");
              });

          scope.$on('loader',
                  function(event, toState, toParams, fromState, fromParams){
                      //add a little delay
                      $timeout(function(){
                        $("#oneloader").addClass("hiddenload");
                      },500)
              });
        // }, 0);
      }
    }
  };

module.exports = loader;