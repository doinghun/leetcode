### Problem

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

Example:

```
Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
```

[Question Source - Leetcode](https://leetcode.com/problems/merge-sorted-array/)

### Solution

> Do a regular merge sort but in reverse comparing the largest numbers first, storing (reversed) into the end of the first array going backwards. This way, the elements you're merging are never overwritten (that this works is easy to see if you think about it for a moment).
> [_Credit - Stackoverflow_](https://stackoverflow.com/questions/4553090/in-place-merge-of-two-arrays)

```javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1,
    k = m + n - 1

  while (i >= 0 && j >= 0) {
    if (nums1[i] < nums2[j]) {
      //elem in num2 is higher
      nums1[k] = nums2[j] //assign to the k th index
      j-- //move left to next elem in num2
    } else {
      //elem in num1 is equal or higher
      nums1[k] = nums1[i] //assign to the k th index
      nums1[i] = nums2[j] //replace num1 elem with num2 elem
      i-- //move left to next elem in num1
    }
    k-- //move k index left
  }
  while (j >= 0) {
    //if nums2 have remaining elems
    nums1[k] = nums2[j]
    j--
    k--
  }
}
```

- Time Complexity: O(n)
- Space Complexity: O(1)