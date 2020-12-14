### Problem

Given an integer array nums, return all possible subsets (the power set).

The solution set must not contain duplicate subsets.

Example 1:
```
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```
Example 2:
```
Input: nums = [0]
Output: [[],[0]]
```

Constraints:
```
1 <= nums.length <= 10
-10 <= nums[i] <= 10
```

### Attempt

![diagram](https://assets.leetcode.com/static_assets/discuss/uploads/files/1503221799085-78.subsets-resized.png)

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [[]];
    backtrack(0, [], nums, result);
    return result
};

function backtrack(first, temp, nums, result) {
    for (let i = first; i < nums.length; i++) {
        temp.push(nums[i]);
        result.push([...temp]);
        backtrack(i + 1, temp, nums, result);
        temp.pop();
    }
}
```
