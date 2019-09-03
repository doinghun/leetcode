
### Problem ![easy](https://img.shields.io/badge/array-easy-brightgreen.svg) 

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

Example:
```
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

### Attempt
```javascript
var threeSum = function(nums) {
    let ans = [];
    let target = 0;
    nums.sort((a,b)=> a-b)
    for(i = 0; i < nums.length-2; i++){
        let partial_target = target - nums[i]
        if (i > 0 && nums[i] === nums[i - 1]) continue
        start = i + 1;
        end = nums.length - 1;
        while(start < end){
            let partial_sum = nums[start] + nums[end]
            if(partial_sum == partial_target){
               ans.push([nums[i],nums[start],nums[end]]);
                while (nums[start] === nums[start + 1]) start++
                while (nums[end] === nums[end - 1]) end--
                start++;
            }
            else if(partial_sum > partial_target){
                end--;
            }
            else start++;
        }
    }
    return ans
};
```
- Runtime: 152 ms, faster than 89.27% of JavaScript online submissions for 3Sum.
- Memory Usage: 46.3 MB, less than 96.00% of JavaScript online submissions for 3Sum.

