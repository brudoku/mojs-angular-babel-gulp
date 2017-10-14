'use strict';
/*...*/
  const NumberSquarer = require('./libs/NumberSquarer.js');
  const ns = new NumberSquarer();
  const app = angular.module('app', ['ngAnimate']);
  const mainCtrl = require('./controllers/mainCtrl.js');
  const otherCtrl = require('./controllers/otherCtrl.js');
  const listAnimation = require('./animations/list_item.js');
  mainCtrl.$inject = ['$scope', '$timeout'];
  otherCtrl.$inject = ['$scope', '$timeout'];
  app.controller('mainCtrl', mainCtrl);
  app.controller('otherCtrl', otherCtrl);
  app.animation('.anim', listAnimation);
  
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
  const COLORS = {
    white:   '#ffffff',
    black:   '#000000',
    green:   '#49F2CC',
    pink:    '#777',
    grey:    '#29363B',
    cyan:    'cyan',
    yellow:  '#FFE202',
    hotpink: 'deeppink',
    };
  let boxWidth = $('#main').width();
  let boxHeight = $('#main').height();  
  // const aCurve = new MojsCurveEditor({name:'bCurve'});  

/*LINKS*/
  let navPos = util.getScreenX()/2;

  const LINK_OPTS = {
    opacity: {0:1},
    scale: {0.3: 1},
    top: 0, left: navPos,
    parent: '#nav',
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
 
/*LINES*/
  let LINE_OPTS = {
    shape: 'line',  
    parent: '.mojs-line-tl-hook',    
    stroke: 'white',
    strokeWidth: 1,
    duration: 1000,
    opacity: {0:1},
    // strokeDashoffset: { '100%': '200%' }, 
    strokeDashoffset: { '-100%': '100%', easing: shiftCurve }, 
    strokeDasharray: {'0.1%':'100%', easing: shiftCurve}, 
    // strokeDashoffset: { '-100%': '100%', curve: shiftCurve }, 
    // strokeDasharray: {'0.1%':'100%', curve: shiftCurve}, 
    };
  let LINE_OPTS_THEN = {
      delay: 500,
      strokeWidth: 0.1,
      strokeDashoffset: { '100%': '-100%', curve: shiftCurve }, 
      strokeDasharray: {'100%':'2%', curve: shiftCurve},   
  }
  let lineTopLeft = new mojs.Shape({
    ...LINE_OPTS,
    angle: 180,
    radius: boxWidth / 2,
    // scale: 1
    }).then(LINE_OPTS_THEN);

  let lineTopRight = new mojs.Shape({
    ...LINE_OPTS, 
    angle: 270,
    radius: boxHeight / 2,
    delay: 250,
    }).then(LINE_OPTS_THEN);

  let lineBottomRight = new mojs.Shape({
    ...LINE_OPTS,
    angle: 0,
    radius: boxWidth / 2,
    delay: 300
    }).then(LINE_OPTS_THEN);

  let lineBottomLeft = new mojs.Shape({
    ...LINE_OPTS, 
    angle: '-270',
    radius: boxHeight / 2,
    delay: 250,
    }).then(LINE_OPTS_THEN);


/*SQUARE*/
  let square2 = new mojs.Shape({
    shape: 'polygon',
    points: 4,
    fill: 'none',
    stroke: COLORS.white,
    duration: 1000,
    radius: {0: RAD, curve: 'cubic.in' } ,
    opacity: {1:0, curve: 'cubic.in'},
    strokeWidth: 1,
    y: y - 370
  })
  /* .then({
    // strokeWidth: {1:4, curve: aCurve.getEasing()}
    // fill: 'red',
      delay: 250,
      angle: {0:45}
    }) */

  let cross = new mojs.Shape({
    shape: 'cross',
    y: util.getScreenY()/2 - y,    
    stroke: COLORS.white,    
    radius: {0: RAD, curve: 'cubic.in' },
    opacity: {1:0},
    y: y - 370
    
    // fill: 'red',
    });

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
        // shape.tune({radius: rescale()*100});
        
      });
      }
  let tuneLines = () => {
    let topLeft = $('.mojs-line-tl-hook').position();
    let boxWidth = $('#main').width();
    let boxHeight = $('#main').height();
    lineTopLeft.tune({
      x: topLeft.top + boxWidth/2,
      y: topLeft.top - 10,
      radius: boxHeight,
    });

    lineTopRight.tune({
      x: topLeft.left + boxWidth,
      y: topLeft.top  + boxHeight/2,    
      radius: boxHeight,    
    })
      
    lineBottomRight.tune({
      x: boxWidth/2,
      y: boxHeight,  
      radius: boxHeight,    
    })

    lineBottomLeft.tune({
      x: topLeft.left + 15,
      y: boxHeight/2,
      radius: boxHeight,    
    })  
    } 
  

      
/*TLINE*/
  timeline.add(
    link1, 
    link2, 
    link3,
  );
  
  let linesArray = [  
    lineTopLeft,
    lineTopRight,
    lineBottomRight,
    lineBottomLeft,
    ];
    
  let shapeArray = [
    square2,
    cross,
  ];
  
  timeline.add(linesArray);

  timeline.add(shapeArray);

  tuneLines();

  tuneShapes(shapeArray)

  timeline.play();
  
/*EDIT*/
  const mojsPlayer = new MojsPlayer({ add: square2 });
  
  window.addEventListener('resize', function(e){
    tuneShapes(shapeArray);
    tuneLines();
    // log(util.getScreenX())
    // log(util.getWindowSize())
    timeline.resume(0);
    
    });
$(window).trigger('resize')
  document.addEventListener('dblclick', function(){
      timeline.replay();
    });


