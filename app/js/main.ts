'use strict';
/*...*/
  const app = angular.module('app', ['ui.router', 'ngAnimate', 'plangular']);
  const mainCtrl  = require('./controllers/mainCtrl.js');
  const lineAnim  = require('./directives/lineAnim.ts');
  const linkAnim  = require('./directives/linkAnim.ts');
  const shapeAnim = require('./directives/shapeAnim.ts');
  const enterAnim = require('./animations/list_item.ts');
  const lazyService = require("./services/lazyService.ts");
  
  const plangular = require('./libs/plangular.js');
  
  mainCtrl.$inject = ['$scope', '$timeout', '$rootScope'];
  app.controller('mainCtrl', mainCtrl);
  app.directive('lineAnim', lineAnim);
  app.directive('linkAnim', linkAnim);
  app.directive('shapeAnim', shapeAnim);
  app.animation('.anim_list_item', enterAnim);
  app.service("lazyService", lazyService);
  
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
          'listen': {
            templateUrl: "/assets/listen.html",
            controller: "mainCtrl as mainCtrl"
          }
        },
        resolve: {
          lazy: function($timeout, lazyService) {
            return function() {           
              return lazyService.lazyFn().then(function(response) {
                console.log('++++++++++');
                console.log(response);
                return response;
              });
            }();
          }
        }
      })
      .state("topView.bio", {
        url: "/bio",
        views: {
          'bio': {
            templateUrl: "/assets/bio.html",
            controller: "mainCtrl as mainCtrl"
          }
        } /* ,
      resolve: {
        postTitlesCats: function(PostHelper) {
          return PostHelper.postCatFn();
        }
      } */
      });
  });
  app.run(["$rootScope", "$timeout", "$state", function($rootScope, $timeout, $state) {
              // $timeout(function() {
              //   $state.go("topView.listen");
              // }, 2000);
            }]);
  const utilimport = require('./libs/util.ts');
  const util = new utilimport();
  function log (msg){
    console.log(msg);
    }
  const shiftCurve = mojs.easing.path( 'M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0' );
  const scaleCurve = mojs.easing.path( 'M0,100 C21.3776817,95.8051376 50,77.3262711 50,0 C50,80.1708527 76.6222458,93.9449005 100,100' );
  const timeline = new mojs.Timeline();

/*VARS*/
  const y = util.getScreenX()/2 - 150;
  const RAD = 320;
  const SF = 0.2;
  let boxWidth = $('#main').width();
  let boxHeight = $('#main').height();  
  // const aCurve = new MojsCurveEditor({name:'bCurve'});  

/*LINKS*/
  // let navPos = ;

  const LINK_OPTS = {
    // opacity: {0:1},
    scale: {0: 1},
    // top: 0, left: util.getScreenX()/2,
    delay: 1000,
    };

  const link1 = new mojs.Html({
    ...LINK_OPTS,
    el: '#l-1',
    top: {'-200':0}
    });

  const link2 = new mojs.Html({
    ...LINK_OPTS,  
    el: '#l-2',
    top: {'200':0}
    
    });

  // const link3 = new mojs.Html({
  //   ...LINK_OPTS,  
  //   el: '#l-3',
  //   });
 
/*FUNC*/

/*TLINE*/


// const shiftCurve = mojs.easing.path( 'M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0' );
// const scaleCurve = mojs.easing.path( 'M0,100 C21.3776817,95.8051376 50,77.3262711 50,0 C50,80.1708527 76.6222458,93.9449005 100,100' );
const links = document.querySelector('#nav')
const line = new mojs.Shape({
  shape:        'line',
  top:          0,
  stroke:       'red',
  strokeWidth:  10,
  parent:       links,
  isShowStart:  true,
  radiusY:      0,
  scaleX:       { 1: 1, curve: scaleCurve },
  origin:       { '0 50%': '100% 50%', easing: shiftCurve },
  isForce3d:    true
});

// $('.trax, #logo, .flex-item, .play, .box').hover( (e) => {
// // $('.flex-item').on( 'mouseover', (e) => {
  
//   console.log('ccc')
//   const $el = $(e.target);
//   line
//     .tune({ y: $el.position().top + 20 })
//     .replay();
// });


  timeline.add(
    link1, 
    link2, 
    // link3,
  );

 
  timeline.play();
  
/*EDIT*/
  // const mojsPlayer = new MojsPlayer({ add: square2 });
  
  window.addEventListener('resize', function(e){
    timeline.resume(0);    
    });
  document.addEventListener('dblclick', function(){
      timeline.replay();
    });
