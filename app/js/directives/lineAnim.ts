
// const utilimport = require('../libs/util.ts');
// const util = new utilimport();

let lineAnim = ($timeout) => {
    return {
        restrict: 'A',
        scope: {},
        link: (scope, elem, attrs) => {
            const shiftCurve = mojs.easing.path( 'M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0' );
            let boxWidth = $('#main').width();
            let boxHeight = $('#main').height();
            
            /*LINES*/
            let LINE_OPTS = {
                shape: 'line',
                parent: '.mojs-line-tl-hook',
                stroke: 'white',
                strokeWidth: 1,
                duration: 1000,
                opacity: { 0: 1 },
                strokeDashoffset: { '-100%': '100%', easing: shiftCurve },
                strokeDasharray: { '0.1%': '100%', easing: shiftCurve },
                // strokeDashoffset: { '100%': '200%' }, 
                // strokeDashoffset: { '-100%': '100%', curve: shiftCurve }, 
                // strokeDasharray: {'0.1%':'100%', curve: shiftCurve}, 
            };
            let LINE_OPTS_THEN = {
                delay: 500,
                strokeWidth: 0.1,
            }
            let lineTopLeft = new mojs.Shape({
                // ...LINE_OPTS,
                shape: 'line',
                parent: '.mojs-line-tl-hook',
                stroke: '#000',
                strokeWidth: 1,
                duration: 1000,
                opacity: { 0: 1 },                
                angle: 180,
                radius: boxWidth / 2,
                strokeDashoffset: { '-100%': '100%', easing: shiftCurve },
                strokeDasharray: { '0.1%': '100%', easing: shiftCurve },                
                // scale: 1
            }).then(LINE_OPTS_THEN);

            let lineTopRight = new mojs.Shape({
                // ...LINE_OPTS,
                shape: 'line',
                parent: '.mojs-line-tl-hook',
                stroke: '#000',
                strokeWidth: 1,
                duration: 1000,
                opacity: { 0: 1 },                
                angle: 270,
                radius: boxHeight / 2,
                delay: 250,
                strokeDashoffset: { '-100%': '100%', easing: shiftCurve },
                strokeDasharray: { '0.1%': '100%', easing: shiftCurve },                
            }).then(LINE_OPTS_THEN);

            let lineBottomRight = new mojs.Shape({
                // ...LINE_OPTS,
                shape: 'line',
                parent: '.mojs-line-tl-hook',
                stroke: '#000',
                strokeWidth: 1,
                duration: 1000,
                opacity: { 0: 1 },                
                angle: 0,
                radius: boxWidth / 2,
                delay: 300,
                strokeDashoffset: { '-100%': '100%', easing: shiftCurve },
                strokeDasharray: { '0.1%': '100%', easing: shiftCurve },                
            }).then(LINE_OPTS_THEN);

            let lineBottomLeft = new mojs.Shape({
                // ...LINE_OPTS,
                shape: 'line',
                parent: '.mojs-line-tl-hook',
                stroke: '#000',
                strokeWidth: 1,
                duration: 1000,
                opacity: { 0: 1 },                
                angle: '-270',
                radius: boxHeight / 2,
                delay: 250,
                strokeDashoffset: { '-100%': '100%', easing: shiftCurve },
                strokeDasharray: { '0.1%': '100%', easing: shiftCurve },                
            }).then(LINE_OPTS_THEN);
            let linesArray = [  
                lineTopLeft,
                lineTopRight,
                lineBottomRight,
                lineBottomLeft,
                ];
            const lineTimeline = new mojs.Timeline();
            let tuneLines = () => {
                let topLeft = $('.mojs-line-tl-hook').position();
                let boxWidth = $('#main').width();
                let boxHeight = $('#main').height();
                lineTopLeft.tune({
                  x: topLeft.top + boxWidth/2,
                  y: topLeft.top - 10,
                  radius: boxWidth,
                });
            
                lineTopRight.tune({
                  x: topLeft.left + boxWidth,
                  y: topLeft.top  + boxHeight/2,    
                  radius: boxHeight,    
                })
                  
                lineBottomRight.tune({
                  x: boxWidth/2,
                  y: boxHeight,  
                  radius: boxWidth,    
                })
            
                lineBottomLeft.tune({
                  x: topLeft.left + 15,
                  y: boxHeight/2,
                  radius: boxHeight,    
                })  
            }

            lineTimeline.add(linesArray);
            lineTimeline.play();
            tuneLines();

            scope.$on('page-changed-from', function(){
                lineTimeline.replay();
            });

            $timeout(function(){
                lineTimeline.playBackward();
            },1000);

            $(window).on('resize', function(e){
                tuneLines();                
            });

            scope.$on("directive-loaded", function() {
                console.log("directive **************");
                lineTimeline.replay();
            });            

        }
    }
}

module.exports = lineAnim;