'use strict';

let lazyService = function ($timeout, $q) {
    let lazy = function(){
        return function() {
            console.log("lazyservice");            
            let deferred = $q.defer();
            $timeout(function () {
                console.log('lazyservice timeout');
                deferred.resolve('XXXXXXXXXXXXXXXX');
                return deferred.promise;
            }, 100);            
        }();
    }
    return {lazyFn: lazy}
}

module.exports = lazyService;