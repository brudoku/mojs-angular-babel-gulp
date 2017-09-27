'use strict;'
class util {
    getScreenX() { 
        return Math.floor(window.innerWidth/2)
    }
    getScreenY() { 
        return Math.floor(window.innerHeight/2);
    }
}

module.exports = util;