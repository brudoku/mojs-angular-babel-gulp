'use strict';
/*...*/
  const app         = angular.module('app', ['ui.router', 'ngAnimate', 'plangular']);
  const mainCtrl    = require('./controllers/mainCtrl.ts');
  const lineAnim    = require('./directives/lineAnim.ts');
  const linkAnim    = require('./directives/linkAnim.ts');
  const shapeAnim   = require('./directives/shapeAnim.ts');
  const navAnim    = require("./directives/navAnim.ts");
  
  const playerLoadAnim = require("./directives/playerLoadAnim.ts");
  const playerButtonAnim = require("./directives/playerButtonAnim.ts");
  
  const loader      = require("./directives/loader.ts");
  const lazyService = require("./services/lazyService.ts");
  const Utility     = require("./services/Utility.ts");
  const waveFormAnim = require("./animations/waveformAnim.ts");
  const trackLoadAnim   = require("./animations/trackLoadAnim.ts");
  const trackTitleAnim = require("./animations/trackTitleAnim.ts");

  app.controller('mainCtrl', mainCtrl);
  app.directive('lineAnim', lineAnim);
  app.directive('linkAnim', linkAnim);
  app.directive('shapeAnim', shapeAnim);
  app.directive("navAnim", navAnim);
  
  app.directive('loader', loader);
  app.directive("playerLoadAnim", playerLoadAnim);
    app.directive("playerLoadAnim", playerLoadAnim);

  app.directive("playerButtonAnim", playerButtonAnim);
  app.animation(".anim-track-title", trackTitleAnim);
  app.animation('.anim-list-item', trackLoadAnim);
  app.animation(".anim-change-track", waveFormAnim);
  
  app.service("lazyService", lazyService);
  app.service("Utility", Utility);
  
  mainCtrl.$inject = ["$scope", "$rootScope", "$state", "$timeout", "lazyService", "Utility"];
  
  app.config(function(plangularConfigProvider, $stateProvider) {

    plangularConfigProvider.clientId = "aeb5b3f63ac0518f8362010439a77ca1";
    $stateProvider
      .state("topView", {
        url: "",
        abstract: true,
        reload: false,
        templateUrl: "/assets/main.html"
      })
      .state("topView.listen", {
        url: "/listen",
        views: {
          listen: {
            templateUrl: "/assets/listen.html",
            controller: "mainCtrl"
          }
        },
        resolve: {
          lazy: function(lazyService) {
            return lazyService.lazyFn();
          }
        }
      })
      .state("topView.bio", {
        url: "/bio",
        views: {
          bio: {
            templateUrl: "/assets/bio.html",
            controller: "mainCtrl"
          }
        }
      });
  });
  app.run(["$rootScope", "$timeout", "$state", function($rootScope, $timeout, $state) {
    $state.go("topView.listen");
              // $timeout(function() {
              // }, 2000);
                // console.log("$viewContentLoaded!!");
              
            //  $rootScope.$on("$stateChangeStart", function(event,toState,toParams,fromState,fromParams) {
            //   // $rootScope.preloader = true;
            //   $rootScope.$broadcast("loader");
            //     console.log("$viewContentLoaded");
              
            // });
            // $rootScope.$on("$stateChangeSuccess", function(event,toState,toParams,fromState,fromParams) {
            //     console.log("$viewContentLoaded!!!!!!!!!!!!!!!");

            //   $rootScope.preloader = false;
            // });               
            //    $rootScope.$on("$viewContentLoading", function() {
            //     console.log("$viewContentLoading");
            //   });
            //   $rootScope.$on("$viewContentLoaded", function() {
            //     console.log("$viewContentLoaded");
            //   });                           
            }]);
