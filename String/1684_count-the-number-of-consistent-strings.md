### Problem
You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.

Example 1:
```
Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
```
Example 2:
```
Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.
```
Example 3:
```
Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
```

Constraints:
```
1 <= words.length <= 104
1 <= allowed.length <= 26
1 <= words[i].length <= 10
The characters in allowed are distinct.
words[i] and allowed contain only lowercase English letters.
```

### Attempt 1

```js
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let res = 0;
    let allowedSet = new Set(allowed)
    for(let i=0; i<words.length; i++){
        let set = new Set(words[i])
        let allTrue = true
        set.forEach((elem) => {
            if(!allowedSet.has(elem)){
                allTrue = false
            }
        })
        if(allTrue) res++
    }
    return res
};
```
- Runtime Complexity: `O(n^2)`
- Space Complexity: `O(1)`

[can-be-improved]