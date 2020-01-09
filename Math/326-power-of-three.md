### Solution

#### Recursion (Brute Force)

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (divideByThree(n)) {
    return true
  }
  return false
}

function divideByThree(num) {
  if (num == 1) return true
  if (num % 3 !== 0 || num == 0) return false
  else {
    return divideByThree(num / 3)
  }
}
```

#### Math
