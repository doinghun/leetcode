### 1st Answer
```javascript
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    var evenArr = [];
    var oddArr = [];
    for(i=0;i<A.length;i++){
        if(A[i]%2 == 0) evenArr.push(A[i]);
        else if(A[i]%2 == 1) oddArr.push(A[i]);
    }
    return evenArr.concat(oddArr)
};
```
Result: 
- Runtime: 80 ms, faster than 59.67% of JavaScript online submissions for Sort Array By Parity.
- Memory Usage: 37.5 MB, less than 8.00% of JavaScript online submissions for Sort Array By Parity.

### 2nd Answer (Improved)
```javascript
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    var ans = [];
    A.forEach((el)=> { el%2===0 ? ans.unshift(el) : ans.push(el)})
    return ans
};
```
Result:
- Runtime: 64 ms, faster than 98.80% of JavaScript online submissions for Sort Array By Parity.
- Memory Usage: 37.1 MB, less than 32.00% of JavaScript online submissions for Sort Array By Parity.
