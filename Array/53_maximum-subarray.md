### Problem

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
```
Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

### Attempt 1
- Kadane's Algorithm
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var maxCur = Number.MIN_SAFE_INTEGER;
    var maxSoFar = Number.MIN_SAFE_INTEGER;
    for(i=0;i<nums.length;i++){
        maxCur = Math.max(nums[i], maxCur += nums[i]);
        maxSoFar = Math.max(maxCur, maxSoFar);
    }
    return maxSoFar
};
```

- Time Complexity: O(N)
- Space Complexity: O(1)