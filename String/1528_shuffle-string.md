### Problem

Given a string s and an integer array indices of the same length.

The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.

Example 1:

```
Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
```

Example 2:

```
Input: s = "aiohn", indices = [3,1,4,2,0]
Output: "nihao"
```

Example 3:
```
Input: s = "art", indices = [1,0,2]
Output: "rat"
```

### Attempt 1 - Brute Force

```javascript
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let n = s.length;
    let newString = '';
    // Brute Force
    for(let i=0; i<n; i++){
        for(let j=0; j<n;j++){
            if(indices[j] === i){
                newString += s[j]
            }
        }
    }
    return newString
};
```
- Runtime Complexity: `O(n^2)`
- Space Complexity: `O(1)`