
const utilimport = require('../libs/util.ts');
const util = new utilimport();

let shapeAnim = () => {
    return {
        restrict: 'A',
        scope: {},
        link: (scope, elem, attrs) => {
            const RAD = 320;
            const SF = 0.2;            
            const y = util.getScreenX()/2 - 150;
            
            let square2 = new mojs.Shape({
                shape: 'polygon',
                points: 4,
                fill: 'none',
                stroke: '#000',
                duration: 1000,
                radius: {0: RAD, curve: 'cubic.in' } ,
                opacity: {1:0, curve: 'cubic.in'},
                strokeWidth: 1,
                // y: y - 90
              });
            
            let cross = new mojs.Shape({
                shape: 'cross',
                stroke: '#000',    
                radius: {0: RAD, curve: 'cubic.in' },
                opacity: {1:0},
                });
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
            const shapeTimeline = new mojs.Timeline();
            let shapeArray = [square2, cross];
            shapeTimeline.add(shapeArray);
            shapeTimeline.play();
        }
    }
}

module.exports = shapeAnim;