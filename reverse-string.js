// Two Pointers Technique

var reverseString = function(s) {
    let i = 0, j = s.length - 1;
    while (i < j) {
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
      }
};

OR
// Duplicate Array

var reverseString = function(s) {
    const n = s.length
    let temp = [...s]
    for(i=0;i<n;i++){
        s[i] = temp[n-1-i]
    }
};

OR
//JavaScript Array syntax
var reverseString = function(s) {
    s.reverse()
};

