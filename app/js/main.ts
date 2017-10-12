'use strict';
/*...*/
  const utilimport = require('./libs/util.ts');
  const util = new utilimport();
  function log (msg){
    console.log(msg);
    }
  const easingStep = new mojs.easing.path('M0, 100 C0, 100 10, 100 10, 100 C10, 100 10, 90 10, 90 C10, 90 25, 90 25, 90 C25, 90 25, 75 25, 75 C25, 75 40, 75 40, 75 C40, 75 40, 60 40, 60 C40, 60 50, 60 50, 60 C50, 60 50, 50 50, 50 C50, 50 60, 50 60, 50 C60, 50 60, 40 60, 40 C60, 40 65, 40 65, 40 C65, 40 65, 35 65, 35 C65, 35 70, 35 70, 35 C70, 35 100, 0 100, 0 ');
  const easingHill = new mojs.easing.path('M0, 100 C0, 100 1.898474554477918, 26.24438258837924 22.571428571428577, 45 C43.24438258837925, 63.75561741162074 40.40319341501881, 37.723531589552444 75, 45 C88.45394944212404, 93.41932555330472 100, 0 100, 0 ');
  const shiftCurve = mojs.easing.path( 'M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0' );
  const scaleCurve = mojs.easing.path( 'M0,100 C21.3776817,95.8051376 50,77.3262711 50,0 C50,80.1708527 76.6222458,93.9449005 100,100' );
  const timeline = new mojs.Timeline();

/*VARS*/
  const y = 250;
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
  
  const aCurve = new MojsCurveEditor({name:'bCurve'});  
  

/*TEXT*/
  const LETTER_OPTS = {
    opacity: {0:1},
    scale: {5: 1},
    top: 0, left: 0,
    parent: '#sv-logo'  
    };

  const letter1 = new mojs.Html({
    ...LETTER_OPTS,
    x: {'-100':15},
    el: '#l-1',
    y: 100,
    });

  const letter2 = new mojs.Html({
    ...LETTER_OPTS,  
    el: '#l-2',
    x: {0:30},
    y: 100,
    delay: 150
    });

  const letter3 = new mojs.Html({
    ...LETTER_OPTS,  
    el: '#l-3',
    x: 50,
    y: {120:100},
    delay: 250
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
let LINE_OPTS_THEN= {
    delay: 500,
    strokeWidth: 0.1,    
    strokeDashoffset: { '100%': '-100%', curve: shiftCurve }, 
    strokeDasharray: {'100%':'2%', curve: shiftCurve},   
}
  let lineTopLeft = new mojs.Shape({
    ...LINE_OPTS,
    angle: 180,
    radius: boxWidth / 2,
    scale: 1
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

  let tuneLines = () => {
    let topLeft = $('.mojs-line-tl-hook').position();
    let boxWidth = $('#main').width();
    let boxHeight = $('#main').height();
    lineTopLeft.tune({
      x: topLeft.top + boxWidth/2,
      y: topLeft.top,
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


/*SQUARE*/
  let square2 = new mojs.Shape({
    shape: 'polygon',
    points: 4,
    fill: 'none',
    stroke: COLORS.white,
    duration: 1000,
    radius: {0: RAD, curve: 'cubic.in' } ,
    opacity: {1:0, curve: aCurve.getEasing()},
    strokeWidth: 1,
    
    // strokeWidth: {1:4, curve: aCurve.getEasing()}
    })/* .then({
      delay: 250,
      angle: {0:45}
    }) */

  let cross = new mojs.Shape({
    shape: 'cross',
    fill: 'none',
    stroke: COLORS.white,    
    radius: {0: RAD, curve: 'cubic.in' } ,
    opacity: {1:0}
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
/*TLINE*/
  timeline.add(
    letter1, 
    letter2, 
    letter3,
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
    });

  document.addEventListener('click', function(){
      timeline.replay();
    });


