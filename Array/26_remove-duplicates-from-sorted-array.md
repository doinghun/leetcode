### Problem

Given a sorted array nums, remove the duplicates in-place such that each element appear only once and **return the new length.**

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

```
Input:
[1,1,2],

Output:
- length = 2
- [1,2]
It doesn't matter what you leave beyond the returned length.
```

Example 2:

```
Input:
[0,0,1,1,1,2,2,3,3,4],

Output:
- length = 5
- [0,1,2,3,4]

It doesn't matter what values are set beyond the returned length.
```

### Solution

#### 1st Attempt

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0
  while (i < nums.length) {
    // if consecutive elem has same number, remove cur elem
    if (nums[i] == nums[i + 1]) nums.splice(i, 1)
    else {
      i++
    }
  }
}
```

- Runtime:`O(n²)`
- Space: `O(1)` _(in-place)_

#### Improved

- Two Pointers: `i` slow-runner & `j` fast-runner

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    //if consecutive elem not equal, copy j value to i+1 position
    if (nums[j] != nums[i]) nums[++i] = nums[j]
  }
  //return length
  return i + 1
}
```

- Runtime:`O(n)`
- Space: `O(1)` _(in-place)_
