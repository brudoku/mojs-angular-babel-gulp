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

// small triangles

let shift1 = 87,
    shift2 = 50,
    SMALL_OPTS = {
      shape:        'polygon',
      duration:     1160,
      radius:       14,
      angle:       -60,
      fill:         'none',
      stroke:       COLORS.white,
      strokeWidth:  { 14 : 4 },
      easing:       'expo.out',
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

// supporting large triangles

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

const timeline = new mojs.Timeline();
timeline
  .add(
    staticTriangle,
    [ small1, small2, small3 ],
    [ support1, support2 ]
  );

new MojsPlayer({ add: timeline, isPlaying: true, isRepeat: true });
