'use strict';

const mainCtrl = require('./controllers/mainCtrl.js');
const otherCtrl = require('./controllers/otherCtrl.js');
const listAnimation = require('./animations/list_item.js');

const app = angular.module('app', ['ngAnimate']);

mainCtrl.$inject = ['$scope', '$timeout'];
otherCtrl.$inject = ['$scope', '$timeout'];

app.controller('mainCtrl', mainCtrl);
app.controller('otherCtrl', otherCtrl);
app.animation('.anim', listAnimation);

var zigzag = new mojs.Shape({
    shape: 'zigzag',
    points: 11,
    radius: 25,
    radiusY: 50,
    left: '25%',
    fill: 'none',
    stroke: 'deeppink',
    isShowStart: true,
});

var curve = new mojs.Shape({
    shape: 'curve',
    points: 11,
    radius: 25,
    radiusY: 50,
    left: '50%',
    fill: 'none',
    stroke: 'deeppink',
    isShowStart: true,
});

var cross = new mojs.Shape({
    shape: 'cross',
    points: 11,
    radius: 25,
    radiusX: 50,
    left: '75%',
    fill: 'none',
    stroke: 'deeppink',
    isShowStart: true,
    y: -25,
});