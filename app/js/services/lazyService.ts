'use strict';

var lazyService = function ($timeout, $q, $http) {
    var lazy = function(){
        return function() {
            // var root = "https://jsonplaceholder.typicode.com/posts/1";

            var deferred = $q.defer();
            // console.log("***************defer");
            // deferred.resolve('xxxxxxxxxxxxxxxxxx');

// $http.get(root).then(function(rsp) {
    //     console.log(rsp);
    //     deferred.resolve('XXXXXXXXXXXXXXXX');
    
    // });
    $timeout(function () {
        console.log("timeout");
        deferred.resolve("XXXXXXXXXXXXXXXX");    
        }, 50);
        return deferred.promise;
    }();
    
    }
    return {lazyFn: lazy}
}

module.exports = lazyService;