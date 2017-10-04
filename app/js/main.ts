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
  scale: {5: 1, curve: easingStep},
}

const b = new mojs.Html({
  ...LETTER_OPTS,
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
scale:{1:1},
  z: {'-100': 0},
  delay: 250
});

const pathAudio = util.getSvgPathsSingle('Layer_1');

class LgA extends mojs.CustomShape {
  getShape () { return '<path d="'+ pathAudio[0] + '""></path>'; }
  getLength () { return 10; }
}

class LgB extends mojs.CustomShape {
  getShape () { return '<path d="'+ pathAudio[1] + '""></path>'; }
  getLength () { return 10; }
}

class LgC extends mojs.CustomShape {
  getShape () { return '<path d="'+ pathAudio[2] + '""></path>'; }
  getLength () { return 10; }
}
class LgD extends mojs.CustomShape {
  getShape () { return '<path d="'+ pathAudio[3] + '""></path>'; }
  getLength () { return 10; }
}

class LgE extends mojs.CustomShape {
  getShape () { return '<path d="'+ pathAudio[4] + '""></path>'; }
  getLength () { return 10; }
}

mojs.addShape('logA', LgA)
mojs.addShape('logB', LgB)
mojs.addShape('logC', LgC)
mojs.addShape('logD', LgD)
mojs.addShape('logE', LgE);


const LOGO_OPTS = {
  stroke:   'white',
  strokeDasharray: {'100%' : '10%'},
  parent: '#logob',
  // strokeDashoffset: {'10%' : '-99%' },
  fill: 'none',
  duration:  400,
  radius: 200,    
  stroke: 'black',
  y: {'50':'41'},
  scale:0.3,

  
}

const A = new mojs.Shape({
  ...LOGO_OPTS,
  // strokeDasharray: '0.3%',
  shape: 'logA', 
  fill: {'black':'black'},
  // angle: { 0: 360, easing: easingHill},
  duration: 1000
});

const B = new mojs.Shape({
  ...LOGO_OPTS,
  shape: 'logB',
});

const C = new mojs.Shape({
  ...LOGO_OPTS,
  shape: 'logC',
});

const D = new mojs.Shape({
...LOGO_OPTS,
shape: 'logD',
});

const E = new mojs.Shape({
...LOGO_OPTS,
shape: 'logE',
});



const DURATION = 400;

const dot = new mojs.Shape({
  shape: 'circle',
  
  parent: '#burst',
  radius: {10: 1},
  opacity: {0: 1}
})

const bubbles = new mojs.Burst({
  left: 0, top: 0,
  parent: '#burst',
  degree:   '360',
  count:    9,
  // radius:   { 20: 1 },
  // radius:  10,
  
  children: {
    shape: 'polygon',
    fill:       'none',
    stroke:   'white',
    strokeDasharray: {'100%' : '10%'},    
    scale: {2:0},
    opacity: {0:1},
    angle: {0: 270},
    pathScale:  'rand(0.5, 1)',
    radius:     'rand(12, 15)',
    swirlSize:  'rand(10, 15)',
    swirlFrequency: 'rand(2, 4)',
    direction:  [ 1, -1 ],
    duration:   `rand(${1*DURATION}, ${2*DURATION})`,
    delay:      'rand(0, 75)',
    easing:     'quad.out',
    isSwirl:    true,
    isForce3d:  true,    
  }
});


const tween = new mojs.Tween({
  duration: 1000,
  delay: 2000,
  
  onUpdate (p) {
    var shiftP = mojs.easing.cubic.in( p );
    var scaleP = mojs.easing.quad.in( p );
    
    mojs.h.setPrefixedStyle( logob, 'transform',
    `translate(0px, ${ -shiftP }px)
    scaleY(${ 1 + 25*scaleP })`
  );    
  }

})

const timeline = new mojs.Timeline();
timeline.add([b, r, u, A, B, C, D, E, bubbles/* tween */]);
timeline.play();
document.addEventListener('click', function(e){
  var x = Math.floor(Math.sin(e.clientX)*10 )+ '%';
  var y = Math.floor(Math.cos(e.clientY)*10 ) + '%';
  bubbles.tune({
    // x: e.pageX, y: e.pageY
  //   strokeDasharray: { x:y },
  //   // strokeDashoffset: { x:y },
  //   // scale: {x : y},
  //   duration: 1000
  })
  timeline.replay();
})

document.addEventListener('mousemove', function(e){
  var x = Math.abs(Math.floor(Math.sin(e.clientX)*3 ) )//+ '%';
  var y = Math.abs(Math.floor(Math.cos(e.clientY)*3 ) ) //+ '%';
  A.tune({
    // strokeDasharray: { x:y },
    // strokeDashoffset: { x:y },
    // scale: y,
    // x: x,
    // y: y
    // duration: 1000
  })//.play()  
  // console.log(x)
  // console.log(y)
  
})
  