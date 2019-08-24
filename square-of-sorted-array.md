### Problem

Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

Example 1:
```
Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
```

Example 2:
```
Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
```

### Attempt 1

```javascript
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    var ans = []
    A.forEach((el) => {
        ans.push(Math.pow(Math.abs(el),2))
    })
    return ans.sort((a,b) => a-b)
};
```

#### Result
- Runtime: 148 ms, faster than 32.14% of JavaScript online submissions for Squares of a Sorted Array.
- Memory Usage: 43.2 MB, less than 81.48% of JavaScript online submissions for Squares of a Sorted Array.
