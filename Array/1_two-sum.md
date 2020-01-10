### Problem

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

### Solution

#### Brute Force

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        return [i, j];
      }
    }
  }
};
```

- Time Complexity: O(n^2)
- Space Complexity: O(1)

#### Using Hash Map (Optimised)

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map();
  nums.forEach((el, idx) => {
    /*
     key: value
    { 2 : 0 
      7:  1
      11: 2
      15: 3 }
    */
    map.set(el, idx);
  });
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    // if key of map contains complement AND is not same index
    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)];
    }
  }
};
```

- Time Complexity: O(2n) ≈ O(n)
- Space Complexity: O(n)
