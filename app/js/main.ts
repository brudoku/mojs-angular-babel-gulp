'use strict';
/*...*/
  const app = angular.module('app', ['ngAnimate']);
  const mainCtrl = require('./controllers/mainCtrl.js');
  const otherCtrl = require('./controllers/otherCtrl.js');
  const lineAnim = require('./directives/lineAnim.ts');
  const shapeAnim = require('./directives/shapeAnim.ts');
  const enterAnim = require('./animations/list_item.ts');
  
  
  mainCtrl.$inject = ['$scope', '$timeout'];
  otherCtrl.$inject = ['$scope', '$timeout'];
  app.controller('mainCtrl', mainCtrl);
  app.controller('otherCtrl', otherCtrl);
  app.directive('lineAnim', lineAnim);
  app.directive('shapeAnim', shapeAnim);
  app.animation('.anim_list_item', enterAnim);
  
  
  // app.run(['$rootScope', '$timeout', function($rootScope, $timeout) {
  //   $timeout(function(){console.log('run');}, 2000);  }]);
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
    opacity: {0:1},
    scale: {0.3: 1},
    top: 0, left: util.getScreenX()/2,
    delay: 1000,
    };

  const link1 = new mojs.Html({
    ...LINK_OPTS,
    el: '#l-1',
    });

  const link2 = new mojs.Html({
    ...LINK_OPTS,  
    el: '#l-2',
    });

  const link3 = new mojs.Html({
    ...LINK_OPTS,  
    el: '#l-3',
    });
 
/*FUNC*/

/*TLINE*/
  timeline.add(
    link1, 
    link2, 
    link3,
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


