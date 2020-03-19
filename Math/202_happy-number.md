### Problem

Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example:

```
Input: 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

_[Question Source: LeetCode](https://leetcode.com/problems/happy-number/)_

### Solution

- Solved in 40 mins without reference
- Used array as storage to refer to previously stored value but could use hash map concept.

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if (n == 1) return true
  let res = n
  let stack = []
  while (res !== 1 && !stack.includes(res)) {
    stack.push(res)
    let num = `${res}`
    let nums = num.split("")
    let sum = 0
    nums.forEach(el => {
      sum += Math.pow(el, 2)
    })
    res = sum
    if (res === 1) return true
  }
  return false
}
```
