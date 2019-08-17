/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    var opened = 0;
    var ans = "";
    for(i=0;i<S.length;i++){
        if((S[i] == "(") && (opened > 0)){ //skip the outermost opened bracket
            ans += (S[i]);
            opened ++;
            }
        else if((S[i] == ")") && (opened > 1)){ //close inner opened bracket
            ans += (S[i]);
            opened --;
            }
        else if((S[i] == ")") && (opened == 1)){//skip the outermost closed bracket
            opened --; 
                }
        else {
            opened ++;
        }
    }
    return ans
};
