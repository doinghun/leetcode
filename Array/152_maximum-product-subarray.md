### Problem

Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:
```
Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
```
Example 2:
```
Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
```

### Solution

- Application of Kadane's Algorithm
- [Explanation](https://www.youtube.com/watch?v=vtJvbRlHqTA)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let curMax = nums[0];
    let curMin = nums[0];
    let prevMax = nums[0];
    let prevMin = nums[0];
    let ans = nums[0];
    for(let i=1; i<nums.length; i++){
        curMax = Math.max(Math.max(prevMax*nums[i],prevMin*nums[i]),nums[i]);
        curMin = Math.min(Math.min(prevMax*nums[i],prevMin*nums[i]),nums[i]);
        ans = Math.max(curMax,ans);
        prevMax = curMax;
        prevMin = curMin;
    }
    return ans;
};
```
- Time Complexity: O(N)
- Space Complexity: O(1)