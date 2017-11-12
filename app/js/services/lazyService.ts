'use strict';

let lazyService = function ($timeout, $q) {
    let lazy = function(){
        return function() {
            let deferred = $q.defer();
            $timeout(function () {
                deferred.resolve('XXXXXXXXXXXXXXXX');
            }, 100);            
            return deferred.promise;
        }();
    }
    return {lazyFn: lazy}
}

module.exports = lazyService;