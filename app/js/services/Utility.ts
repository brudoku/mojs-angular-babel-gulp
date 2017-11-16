'use strict';

var Utility = function ($rootScope) {
    var stateMonitor = function () {
        $rootScope.$on('$stateChangeStart',	function(evt, toState, toParams, fromState, fromParams){
            console.log("stateChangeStartstateChangeStartstateChangeStart");
        });
        return true;
    }

    return {
        stateMonitor: stateMonitor
    }
}

module.exports = Utility;