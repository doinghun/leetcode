### Problem

Given two arrays, write a function to compute their intersection.

Example 1:

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
```

Example 2:

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]

```

Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.

<details>
<summary>Follow up:</summary>
<ul><li> What if the given array is already sorted? How would you optimize your algorithm? </li>
<li> What if nums1's size is small compared to nums2's size? Which algorithm is better? </li>
<li> What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?</li></ul>
</details>

[Question Source - leetcode](https://leetcode.com/problems/intersection-of-two-arrays-ii/)

### Solution

#### Using Object

```javascript
var intersect = function(nums1, nums2) {
  let map = {}
  let res = []
  for (i = 0; i < nums1.length; i++) {
    map[nums1[i]] ? map[nums1[i]]++ : (map[nums1[i]] = 1)
  }
  for (i = 0; i < nums2.length; i++) {
    if (map.hasOwnProperty(nums2[i]) && map[nums2[i]] > 0) {
      res.push(nums2[i])
      map[nums2[i]]--
    }
  }
  return res
}
```

- Time Complexity: `O(n)`
- Space Complexity: `O(n)`

#### Using Map (ES6)

```javascript
var intersect = function(nums1, nums2) {
  let map = new Map()
  let res = []
  for (i = 0; i < nums1.length; i++) {
    let n = nums1[i]
    map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1)
  }
  for (i = 0; i < nums2.length; i++) {
    let n = nums2[i]
    if (map.has(n) && map.get(n) > 0) {
      res.push(n)
      map.set(n, map.get(n) - 1)
    }
  }
  return res
}
```

- Time Complexity: `O(n)`
- Space Complexity: `O(n)`
