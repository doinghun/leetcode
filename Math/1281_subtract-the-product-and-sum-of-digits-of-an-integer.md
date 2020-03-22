## Problem 

Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

Example 1:
```
Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
```
Example 2:
```
Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21
```

Constraints:
- 1 <= n <= 10^5

## Solution

```js
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let nStr = n.toString();
    let sum = 0;
    let pdt = 1;
    for(let i=0; i<nStr.length;i++){
        let nNum = Number(nStr[i])
        sum += nNum;
        pdt *= nNum;
    }
    return pdt - sum;
};
```
- Time Complexity: `O(n)`
- Space Complexity: `O(1)`