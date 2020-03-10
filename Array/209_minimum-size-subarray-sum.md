### Problem

Given an array of **n** positive integers and a positive integer **s**, find the minimal length of a **contiguous** subarray of which the sum ≥ **s**. If there isn't one, return 0 instead.

Example:

```
Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
```

Follow up:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).

[Question Source - Leetcode](https://leetcode.com/problems/minimum-size-subarray-sum/)

### Solution

#### Using Sliding Window Technique

```javascript
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let sum = 0,
    start = 0,
    end = 0,
    minLen = Infinity;
  while (start < nums.length) {
    // As long as sum is less than s, increase the end of the window
    if (sum < s && end < nums.length) {
      sum += nums[end];
      end++;
    } else if (sum >= s) {
      // If sum exceeds s, save existing array length and
      // shorten window by increasing the start of the window
      minLen = Math.min(minLen, end - start);
      sum -= nums[start];
      start++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
};
```

- Time Complexity : O(n)
- Space Complexity: O(1)
