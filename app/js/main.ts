'use strict';

const NumberSquarer = require('./libs/NumberSquarer.js');
const ns = new NumberSquarer();
const mainCtrl = require('./controllers/mainCtrl.js');
const otherCtrl = require('./controllers/otherCtrl.js');
const listAnimation = require('./animations/list_item.js');
const app = angular.module('app', ['ngAnimate']);
mainCtrl.$inject = ['$scope', '$timeout'];
otherCtrl.$inject = ['$scope', '$timeout'];

app.controller('mainCtrl', mainCtrl);
app.controller('otherCtrl', otherCtrl);
app.animation('.anim', listAnimation);


const _getWindowSize = () => {
  const w = window;
  return Math.max( (w.innerHeight || e.clientHeight || g.clientHeight), (w.innerWidth || e.clientWidth || g.clientWidth) )
}

const _calcScale = (radius) => {
  return 1.4 * (_getWindowSize() / radius / 2);
}



function log(args) {
  try {
    if(window.console && window.console.log){
      window.console.log.apply(window.console, arguments);
    }
  } catch (e) {}
}

const utilimport = require('./libs/util.ts');
const util = new utilimport();
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

const y = -50;

let generateGrid = (rows, cols) => {
  return _.flatten(_.map(_.range(rows), function(row, rowIndex){
    return _.map(_.range(cols), function(col, colIndex){
        return {row: rowIndex,
            col: colIndex,
            isOn: false,
            cellId: rowIndex + '' + colIndex
        };
    });
  }));
}

log( generateGrid(10,10) );

/* ADD CUSTOM SHAPE */
class Heart extends mojs.CustomShape {
  getShape () { return '<path d="M92.5939814,7.35914503 C82.6692916,-2.45304834 66.6322927,-2.45304834 56.7076029,7.35914503 L52.3452392,11.6965095 C51.0327802,12.9714696 48.9328458,12.9839693 47.6203869,11.6715103 L47.6203869,11.6715103 L43.2705228,7.35914503 C33.3833318,-2.45304834 17.3213337,-2.45304834 7.43414268,7.35914503 C-2.47804756,17.1963376 -2.47804756,33.12084 7.43414268,42.9205337 L29.7959439,65.11984 C29.7959439,65.1323396 29.8084435,65.1323396 29.8084435,65.1448392 L43.2580232,78.4819224 C46.9704072,82.1818068 52.9952189,82.1818068 56.7076029,78.4819224 L70.1696822,65.1448392 C70.1696822,65.1448392 70.1696822,65.1323396 70.1821818,65.1323396 L92.5939814,42.9205337 C102.468673,33.12084 102.468673,17.1963376 92.5939814,7.35914503 L92.5939814,7.35914503 Z"></path>'; }
  getLength () { return 292.110107421875; } // optional
}
mojs.addShape( 'heart', Heart ); // passing name and Bubble class

const staticTriangle = new mojs.Shape({
  shape:        'polygon',
  duration:     2160,
  radius:       { 100: 10 },
  angle:       -60,
  fill:         'none',
  stroke:       COLORS.black,
  strokeWidth:  { 20 : 5 },
  easing:       'cubic.out',
  isShowEnd:    false,
  width:        170,
  height:       170,
  y
})

let shift1 = 87,
    shift2 = 50,
    SMALL_OPTS = {
      shape:        'polygon',
      duration:     1160,
      radius:       14,
      angle:       -60,
      fill:         'none',
      stroke:       COLORS.grey,
      strokeWidth:  { 14 : 4 },
      easing:       'expo.out',
      strokeDasharray: { 12: 2},
      strokeDashoffset: {12:4},        
      isShowEnd:    false,
      scale: {1 : 1} 
    };

let SUPP_OPTS = {
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
      strokeDasharray: { 2: 10},
      strokeDashoffset: {3:8},      
      y,
      x:            1,
      isShowEnd:    false
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
      y: { [y]: 1.15*shift1 + y }
    });

let support1 = new mojs.Shape(SUPP_OPTS);

let support2 = new mojs.Transit({
  ...SUPP_OPTS,
  strokeWidth: { 4 : 0 },
  fill:         'none',
  duration:     810,
  radius:       { 50 : 5 }
});

let support3 = new mojs.Transit({
  ...SUPP_OPTS,
  // strokeWidth: { 4 : 0 },
  fill:         COLORS.yellow,
  duration:     810,
  radius:       { 5 : 1 },
  scale: {1 : 5}
}).play();

/* 
let line = new mojs.Shape({
  shape: 'line',
  fill: COLORS.black,
  stroke: COLORS.white,
})
*/

let line1 = new mojs.Shape({
  parent: '#js-elem',
  shape: 'line',
  // x:util.getScreenX(),
  // y:util.getScreenY(),
  // y: 10,
  fill: 'none',
  radius: {'10px' : '255px'},
  // scale: {1:10},
  // strokeWidth: {1:0.1},
  stroke: COLORS.cyan,
  strokeDasharray: { 2: 6},
  strokeDashoffset: {3:8},
  duration: 500,
  strokeOpacity: {1:1}
}).play();


/* USE CUSTOM SHAPE */
// now it is avaliable on mojs.Shape constructor as usual
const heart = new mojs.Shape({
  shape:    'heart',
  fill:     'none',
  stroke:   'white',
  strokeDasharray: '100%',
  strokeDashoffset: { '-100%' : '100%' },
  y:         {'-20': '-100'},
  duration:  1000,
});


const timeline = new mojs.Timeline();

timeline
  .add(
    staticTriangle,
    [ small1, small2, small3 ],
    [ support1, support2, support3, heart],
  )

// new MojsPlayer({ add: timeline, isPlaying: true, isRepeat: true });

$(document).ready(function(){
  console.log('ready');

})


const links = document.querySelector('#js-links');

const shiftCurve = mojs.easing.path( 'M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0' );
const scaleCurve = mojs.easing.path( 'M0,100 C21.3776817,95.8051376 50,77.3262711 50,0 C50,80.1708527 76.6222458,93.9449005 100,100' );

const line = new mojs.Shape({
  shape:        'line',
  top:          0,
  stroke:       'white',
  strokeWidth:  2,
  parent:       links,
  isShowStart:  true,
  radiusY:      0,
  scaleX:       { 1: 1, curve: scaleCurve },
  origin:       { '0 50%': '100% 50%', easing: shiftCurve },
  isForce3d:    true
});

$('.link').on( 'mouseenter', (e) => {
  const $el = $(e.target);
  line
    .tune({ y: $el.position().top + 20 })
    .replay();
});


document.addEventListener( 'click', function (e) {
  console.log(e.clientX)
  console.log(e.clientY)
  
  line1.tune({
    // x: e.clientX,
    // y:  e.clientY
  })
  .play();
  
  timeline
    .replay();
  
});