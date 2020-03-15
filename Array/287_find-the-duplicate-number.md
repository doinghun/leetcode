### Problem

Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

<!-- more -->

Example 1:

```
Input: [1,3,4,2,2]
Output: 2
```

Example 2:

```
Input: [3,1,3,4,2]
Output: 3
```

Note:

- You must not modify the array (assume the array is read only).
- You must use only constant, O(1) extra space.
- Your runtime complexity should be less than O(n2).
- There is only one duplicate number in the array, but it could be repeated more than once.

[Question Source - Leetcode](https://leetcode.com/problems/find-the-duplicate-number/)

### Solution

According to the conditions, sorting or new Set/Object creation is not allowed.

#### Two Pointers

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let i = 0,
    j = i + 1
  while (i < nums.length - 1) {
    // if two pointers have same number return the number
    if (nums[i] === nums[j]) return nums[i]
    // move j along
    else if (j < nums.length - 1) {
      j++
    }
    // move i along & reset j position
    else if (j == nums.length - 1) {
      i++
      j = i + 1
    }
  }
}
```

- Time Complexity: Min `O(N)` Max `O(N^2)`
- Space Complexity: O(1)

#### Floyd's Tortoise and Hare (Cycle Detection)

- To Be Updated
