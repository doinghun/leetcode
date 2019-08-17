/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const keypair = {
        "(" : ")" ,
        "[" : "]" ,
        "{" : "}"
    }
    var stack = [];
    for(i=0;i < s.length; i++){
        if (s[i] in keypair){ // only accept opening
            stack.push(s[i]); 
        }
        else if (keypair[stack.pop()] !== s[i]){ //check if closing has pair in stack
            return false
        }
    }
    return stack.length === 0
};
