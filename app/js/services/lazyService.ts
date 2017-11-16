'use strict';

var lazyService = function ($timeout, $q, $http) {
    var lazy = function(){
        return function() {
            var deferred = $q.defer();
            $timeout(function () {
                deferred.resolve("-----deferred.resolve-----");    
                }, 1000);
                return deferred.promise;
            }();
    }
    return {lazyFn: lazy}
}

module.exports = lazyService;