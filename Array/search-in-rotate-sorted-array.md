### Problem
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:
```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```
Example 2:
```
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```
### Attempt

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    //Binary Search
    let left = 0;
    let right = nums.length - 1; 
    let ans = 0;
    
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid] == target){
            return mid;
        }
        if(nums[left] <= nums[mid]){
            if(nums[left] <= target && target <= nums[mid]){
                right = mid - 1;
            }
            else left = mid + 1;
        
        }
        else{
            if(nums[mid] <= target && target <= nums[right]){
                left = mid + 1;
            }
            else right = mid -1;
        }
    }
    
    return -1;
};
```
- Runtime: 56 ms, faster than 65.91% of JavaScript online submissions for Search in Rotated Sorted Array.
- Memory Usage: 33.8 MB, less than 57.69% of JavaScript online submissions for Search in Rotated Sorted Array.
