'use strict';
const utilimport = require('./libs/util.ts');
const util = new utilimport();
function log (msg){
  console.log(msg);
}
const easingStep = new mojs.easing.path('M0, 100 C0, 100 10, 100 10, 100 C10, 100 10, 90 10, 90 C10, 90 25, 90 25, 90 C25, 90 25, 75 25, 75 C25, 75 40, 75 40, 75 C40, 75 40, 60 40, 60 C40, 60 50, 60 50, 60 C50, 60 50, 50 50, 50 C50, 50 60, 50 60, 50 C60, 50 60, 40 60, 40 C60, 40 65, 40 65, 40 C65, 40 65, 35 65, 35 C65, 35 70, 35 70, 35 C70, 35 100, 0 100, 0 ');
const easingHill = new mojs.easing.path('M0, 100 C0, 100 1.898474554477918, 26.24438258837924 22.571428571428577, 45 C43.24438258837925, 63.75561741162074 40.40319341501881, 37.723531589552444 75, 45 C88.45394944212404, 93.41932555330472 100, 0 100, 0 ');

const LETTER_OPTS = {
  opacity: {0:1},
  scale: {5: 1},
};

const b = new mojs.Html({
  ...LETTER_OPTS,
  x: {'-100':15},
  el: '#l-1',
  y: {0: 100, },  
});

const r = new mojs.Html({
  ...LETTER_OPTS,  
  el: '#l-2',
  x: {0:30},
  y: 100,
  delay: 150
});

const u = new mojs.Html({
  ...LETTER_OPTS,  
  el: '#l-3',
  x: 50,
  y: {120:100},
  delay: 250
});

const logobru = new mojs.Html({
  el: '#sv-logo',
  // angleX: {'-90': 0},
  duration:750,
  opacity: {0:1},
  // y: {'-50': 0},
  scaleX: { 2:1 },
  scaleY: { 0:1 }
  
});

class Heart extends mojs.CustomShape {
  getShape () { return '<path d="M92.5939814,7.35914503 C82.6692916,-2.45304834 66.6322927,-2.45304834 56.7076029,7.35914503 L52.3452392,11.6965095 C51.0327802,12.9714696 48.9328458,12.9839693 47.6203869,11.6715103 L47.6203869,11.6715103 L43.2705228,7.35914503 C33.3833318,-2.45304834 17.3213337,-2.45304834 7.43414268,7.35914503 C-2.47804756,17.1963376 -2.47804756,33.12084 7.43414268,42.9205337 L29.7959439,65.11984 C29.7959439,65.1323396 29.8084435,65.1323396 29.8084435,65.1448392 L43.2580232,78.4819224 C46.9704072,82.1818068 52.9952189,82.1818068 56.7076029,78.4819224 L70.1696822,65.1448392 C70.1696822,65.1448392 70.1696822,65.1323396 70.1821818,65.1323396 L92.5939814,42.9205337 C102.468673,33.12084 102.468673,17.1963376 92.5939814,7.35914503 L92.5939814,7.35914503 Z"></path>'; }
  getLength () { return 292.110107421875; } // optional
}

mojs.addShape( 'heart', Heart ); 

const heart = new mojs.Shape({
  shape:    'heart',
  fill:     'none',
  stroke:   'white',
  strokeDasharray: '100%',
  strokeDashoffset: { '-100%' : '100%' },
  y:         -20,
  duration:  1000,
});

var square = document.querySelector('#js-square');

var anim = new mojs.Html({
  el: square,
   y: {
    0: '50%',
    duration: 300,
    delay: 100,
    easing: 'cubic.out',
  },
  x: {
    0: '50%',
    duration: 300,
    delay: 300,
    easing: 'cubic.out',
  },
  width:{
    '80%': '50%',
    duration: 300,
    delay: 600,
    easing: 'cubic.out',
  }
});

let LINE_OPTS = {
  shape: 'line',  
  stroke: 'white',
  duration: 1000,
  // strokeDashoffset: { '100%': '200%' }, // animate from 100% length to 200% length => shift from invisible to visible
  strokeDashoffset: { '-100%': '100%' }, // alternatively  
  strokeDasharray: {'100%':'100%'}, // make dash on the line 100% length visible followed by 100% length of transparent  
};

/*@todo 
  calc dimensions and assign line xy values
*/

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
    x: topLeft.left,
    y: boxHeight/2,
    radius: boxHeight,    
  })  
}

let boxWidth = $('#main').width();
let boxHeight = $('#main').height();

let lineTopLeft = new mojs.Shape({
  ...LINE_OPTS,
  parent: '.mojs-line-tl-hook',    
  angle: 180,
  radius: boxWidth / 2,
  scale: 1
});

let lineTopRight = new mojs.Shape({
  ...LINE_OPTS, 
  parent: '.mojs-line-tl-hook',    
  angle: 270,
  radius: boxHeight / 2,
  delay: 250,
});
let lineBottomRight = new mojs.Shape({
  ...LINE_OPTS,
  parent: '.mojs-line-tl-hook',    
  angle: 0,
  radius: boxWidth / 2,
  delay: 300
});

let lineBottomLeft = new mojs.Shape({
  ...LINE_OPTS, 
  parent: '.mojs-line-tl-hook',    
  angle: '-270',
  radius: boxHeight / 2,
  delay: 750,
});
let linesArray= [  
  lineTopLeft,
  lineTopRight,
  lineBottomRight,
  lineBottomLeft,
]

const timeline = new mojs.Timeline();
timeline.add([b, r, u, 
  logobru,
   anim,
   heart
  ]);
timeline.add(linesArray);
tuneLines();

timeline.play();

const RAD = 320;
const SF = 0.8;

function rescale(){
  let w = util.getWindowSize();  
  return Math.abs(( w / RAD ) * SF);
}

function tuneEm(arr){
  let w = util.getWindowSize();
  let rad = Math.abs(( w / RAD ) * SF) * 50;
  line.tune({radius: rad});
  /* linesArray
  _.each(arr, function(shape){
    shape.tune({scale: rescale()});
  }); */

  _.each(arr, function(shape){
    shape.tune({scale: rescale()});
  });
}

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
const blendMode = 'screen';

const y = -50;

const staticTriangle = new mojs.Shape({
  shape:        'polygon',
  duration:     1160,
  
  radius:       { 60: 65 },
  angle:       -60,
  fill:         'none',
  stroke:       COLORS.white,
  strokeWidth:  { 30 : 5 },
  easing:       'cubic.out',
  isShowEnd:    false,
  width:        170,
  height:       170,
  y
  });


let shift1 = 87,
  shift2 = 50,
  SMALL_OPTS = {
  scale: 3,
  parent: '#sv-logo',
  shape:        'polygon',
  duration:     1160,
  radius:       14,
  angle:       -60,
  fill:         'none',
  stroke:       COLORS.white,
  strokeWidth:  { 14 : 4 },
  easing:       'expo.out',
  isShowEnd:    false,
  // angle: {0:730}
  };

let small1 = new mojs.Shape({
  ...SMALL_OPTS,
  x: { 0: -shift1 },
  y: { [y]: -shift2 + y }
  });

let small2 = new mojs.Shape({
  ...SMALL_OPTS,
  x: { 0: shift1 },
  y: { [y]: -shift2 + y }
  });

let small3 = new mojs.Shape({
  ...SMALL_OPTS,
  y: { [y]: 1.15*shift1 + y },
  scale: rescale()
  });

let SUPP_OPTS = {
  scale: 3,
  parent: '#sv-logo',
  shape:        'polygon',
  duration:     1000,
  radius:       { 40: 20 },
  angle:       -60,
  fill:         'white',
  fillOpacity:  { 0: 1 },
  stroke:       COLORS.white,
  strokeWidth:  { 7 : 0 },
  easing:       'cubic.out',
  delay:        60,
  y,
  // x:            1,
  isShowEnd:    false
}
let support1 = new mojs.Shape(SUPP_OPTS);

let support2 = new mojs.Transit({
  ...SUPP_OPTS,
  strokeWidth: { 4 : 0 },
  fill:         'none',
  // duration:     810,
  radius:       { 85 : 95 }
  });



const line = new mojs.Shape({
  shape: 'line',
  stroke: 'hotpink',
  // radius: 200,
  parent: '#line',
  repeat: 1,
  strokeDasharray: '100%', // make dash on the line 100% length visible followed by 100% length of transparent
  strokeDashoffset: { '100%': '200%' }, // animate from 100% length to 200% length => shift from invisible to visible
  // strokeDashoffset: { '-100%': '100%' }, // alternatively
  y: { 0: util.getScreenY() },
  x: { 0: util.getScreenX() },  
  duration: 400,
  // angle: {0:360},
}).then({
  y: { 0: util.getScreenX() },
  x: { 0: util.getScreenY() },  
  duration: 400,
  onComplete(){
    timeline.replayBackward()
  } 
});

var shapeArray = [staticTriangle, small1, small2, small3, support1, support2, line];



timeline
.add(
shapeArray, 

);

tuneEm(shapeArray)

window.addEventListener('resize', function(e){
  tuneEm(shapeArray);
  tuneLines();
});

document.addEventListener('click', function(){
  timeline.replay();
});