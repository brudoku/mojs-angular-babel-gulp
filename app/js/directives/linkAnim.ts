
// const utilimport = require('../libs/util.ts');
// const util = new utilimport();

let linkAnim = () => {
    return {
        restrict: 'A',
        scope: {},
        link: (scope, elem, attrs) => {
            let boxWidth = $('#main').width();
            let boxHeight = $('#main').width();
            
            let $elem = $(elem);
            const shiftCurve = mojs.easing.path( 'M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0' );
            const scaleCurve = mojs.easing.path( 'M0,100 C21.3776817,95.8051376 50,77.3262711 50,0 C50,80.1708527 76.6222458,93.9449005 100,100' );            
            const line = new mojs.Shape({
                shape:        'line',
                top:          boxHeight/2,
                parent:       $elem.parent(),
                stroke: '#000',
                strokeWidth: 1,
                duration: 1000,
                opacity: { 0: 1 },                
                angle: 0,
                radius: $elem.width(),
                strokeDashoffset: { '-100%': '100%', easing: shiftCurve },
                strokeDasharray: { '0.1%': '100%', easing: shiftCurve },                  
              });
              $elem.mouseover(()=>{
                line
                .tune({ y: $elem.position().top + 20 })
                .replay();
              })
        }
    }
}

module.exports = linkAnim;