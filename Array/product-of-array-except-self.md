### Problem

Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
```
Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
```
Note: Please solve it without division and in O(n).

### Attempt 1
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var temp = [];
    var ans = [];
 
    for(i=0;i<nums.length;i++){
        temp = nums.shift();
        ans.push(nums.reduce( (a,b) => a * b));
        nums.push(temp);
    }
    return ans
};
```

#### Result
- Runtime: 6652 ms, faster than 5.02% of JavaScript online submissions for Product of Array Except Self.
- Memory Usage: 42.7 MB, less than 16.00% of JavaScript online submissions for Product of Array Except Self.

### Attempt 2 (Improved)

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var res = [];
    var left = 1;
    var right = 1;
    var n = nums.length
    
    for(i=0; i<n;i++){
        if(i>0){
            left *= nums[i-1];
        }
        res[i] = left
    }
    
    for(i=n-1; i >= 0; i--){
        if(i<n-1){
            right *= nums[i+1];   
        }
        res[i] *= right;
    }
    
    return res
};
```
#### Result
- Runtime: 80 ms, faster than 77.51% of JavaScript online submissions for Product of Array Except Self.
- Memory Usage: 42.1 MB, less than 76.00% of JavaScript online submissions for Product of Array Except Self.
