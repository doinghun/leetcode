/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let hor = 0
    let vert = 0
    for(i=0;i<moves.length;i++){
        if(moves[i] == "U") vert++
        if(moves[i] == "D") vert--
        if(moves[i] == "R") hor++
        if(moves[i] == "L") hor--
    }
    return hor == 0 && vert == 0 ? true : false    
};

/*
- Runtime: 60 ms, faster than 83.52% of JavaScript online submissions for Robot Return to Origin.
- Memory Usage: 36.1 MB, less than 66.67% of JavaScript online submissions for Robot Return to Origin.
*/