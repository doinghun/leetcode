### Problem

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

```
Input: [3,0,1]
Output: 2
```

Example 2:

```
Input: [9,6,4,2,3,5,7,0,1]
Output: 8
```

Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

_[Question Source - Leetcode](https://leetcode.com/problems/missing-number/)_

### Solution

#### 1st Attempt

```javascript
var missingNumber = function(nums) {
  nums.sort((a, b) => a - b)
  for (i = 0; i <= nums.length; i++) {
    if (i !== nums[i]) {
      return i
    }
  }
}
```

- Time Complexity: `O(nlgn)` due to sort
- Space Complexity: `O(1)`

#### Improved

- Using [Gauss' Formula](https://brilliant.org/wiki/sum-of-n-n2-or-n3/)

```javascript
var missingNumber = function(nums) {
  let n = nums.length
  let sum = ((0 + n) * (n + 1)) / 2
  for (i = 0; i < n; i++) {
    sum -= nums[i]
  }
  return sum
}
```

- Time Complexity: `O(n)`
- Space Complexity: `O(1)`

#### Bitwise

Using XOR concept: XOR is its own inverse

```
missing =4^(0^0)^(1^1)^(2^3)^(3^4)
        =(4^4)^(0^0)^(1^1)^(3^3)^2
        =0^0^0^0^2
        =2
```

​

```javascript
var missingNumber = function(nums) {
  let res = nums.length
  for (i = 0; i < nums.length; i++) {
    res ^= i ^ nums[i]
  }
  return res
}
```

- Time Complexity: `O(n)`
- Space Complexity: `O(1)`
