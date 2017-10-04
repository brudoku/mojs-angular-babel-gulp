'use strict;'
class util {
    getScreenX() { 
        return Math.floor(window.innerWidth/2)
    }
    getScreenY() { 
        return Math.floor(window.innerHeight/2);
    }
    getWindowSize() {
        const w = window;
        return Math.max( (w.innerHeight || e.clientHeight || g.clientHeight), (w.innerWidth || e.clientWidth || g.clientWidth) )
      }    
    randomColor(){
        // return '#'+Math.floor(Math.random()*16777215).toString(16);
        return '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    }
    getSvgPathsSingle(id){
        let $elem = $('#' + id);
        let ret = _.map($($elem.find('g')[0]).find('path'), function(el){
                return $(el).attr('d');
            });
        return ret;
    }    
    // getSvgPathGroup(id){
    //     let $elem = $('#' + id);
    //     let ret = _.reduce(_.map($($elem.find('g')[0]).find('path'), function(el){
    //             return $(el).attr('d');
    //         }), function(path, nextPath){
    //             return path + nextPath
    //         });
    //     return ret;
    // }
}

module.exports = util;