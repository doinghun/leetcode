/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseCode = {
        "a":".-",
        "b":"-...",
        "c":"-.-.",
        "d":"-..",
        "e":".",
        "f":"..-.",
        "g":"--.",
        "h":"....",
        "i":"..",
        "j":".---",
        "k":"-.-",
        "l":".-..",
        "m":"--",
        "n":"-.",
        "o":"---",
        "p":".--.",
        "q":"--.-",
        "r":".-.",
        "s":"...",
        "t":"-",
        "u":"..-",
        "v":"...-",
        "w":".--",
        "x":"-..-",
        "y":"-.--",
        "z":"--.."
    };
    var ans = 0;
    var stack = [];
    var count = {};
    for(i=0;i<words.length;i++){
        var morseWord = "";
        for(j=0;j<words[i].length;j++){
            morseWord += morseCode[words[i][j]];
        };
        count[morseWord] = i;
    };
    return (Object.keys(count).length)
};
