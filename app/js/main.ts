'use strict';
/*...*/
  const app = angular.module('app', ['ngAnimate']);
  const mainCtrl = require('./controllers/mainCtrl.js');
  const otherCtrl = require('./controllers/otherCtrl.js');
  const lineAnim = require('./directives/lineAnim.ts');
  const shapeAnim = require('./directives/shapeAnim.ts');
  
  mainCtrl.$inject = ['$scope', '$timeout'];
  otherCtrl.$inject = ['$scope', '$timeout'];
  app.controller('mainCtrl', mainCtrl);
  app.controller('otherCtrl', otherCtrl);
  app.directive('lineAnim', lineAnim);
  app.directive('shapeAnim', shapeAnim);
  
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
  let navPos = util.getScreenX()/2;

  const LINK_OPTS = {
    opacity: {0:1},
    scale: {0.3: 1},
    top: 0, left: navPos,
    // parent: '#nav',
    delay: 1000,
    // y,
    };

  const link1 = new mojs.Html({
    ...LINK_OPTS,
    // x: {'-30':15},
    el: '#l-1',
    });

  const link2 = new mojs.Html({
    ...LINK_OPTS,  
    el: '#l-2',
    // x: 60,
    // y: {'110':100},
    });

  const link3 = new mojs.Html({
    ...LINK_OPTS,  
    el: '#l-3',
    // x: {70:90},
    });
 



/*SQUARE*/
  // let square2 = new mojs.Shape({
  //   shape: 'polygon',
  //   points: 4,
  //   fill: 'none',
  //   stroke: '#fff',
  //   duration: 1000,
  //   radius: {0: RAD, curve: 'cubic.in' } ,
  //   opacity: {1:0, curve: 'cubic.in'},
  //   strokeWidth: 1,
  //   y: y - 90
  // });

  // let cross = new mojs.Shape({
  //   shape: 'cross',
  //   y: util.getScreenY()/2 - y,    
  //   stroke: '#fff',    
  //   radius: {0: RAD, curve: 'cubic.in' },
  //   opacity: {1:0},
  //   y: y - 90
  //   });

/*FUNC*/
  let rescale = () => {
    let w = util.getWindowSize();  
    return Math.abs(( w / RAD ) * SF);
    }
  let tuneShapes = (arr) => {
      let w = util.getWindowSize();
      let rad = Math.abs(( w / RAD ) * SF) * 50;
      _.each(arr, function(shape){
        shape.tune({scale: rescale()});
      });
      }
      
/*TLINE*/
  timeline.add(
    link1, 
    link2, 
    link3,
  );

  // let shapeArray = [
  //   square2,
  //   cross,
  // ];
  
  // timeline.add(shapeArray);

  // tuneShapes(shapeArray)

  timeline.play();
  
/*EDIT*/
  // const mojsPlayer = new MojsPlayer({ add: square2 });
  
  window.addEventListener('resize', function(e){
    // tuneShapes(shapeArray);
    // tuneLines();
    timeline.resume(0);    
    });
$(window).trigger('resize')
  document.addEventListener('dblclick', function(){
      timeline.replay();
    });


