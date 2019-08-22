<details>
<summary>Problem</summary>
Given an array of integers, find if the array contains any duplicates. 
Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:
```
Input: [1,2,3,1]
Output: true
```

Example 2:
```
Input: [1,2,3,4]
Output: false

```
</details>


### Attempt 1
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var sorted = nums.sort()
    for(i=1;i<sorted.length;i++){
        if(sorted[i] == sorted[i-1]) return true
    }
    return false
};
```

#### Result
- Runtime: 104 ms, faster than 20.97% of JavaScript online submissions for Contains Duplicate.
- Memory Usage: 38.6 MB, less than 88.24% of JavaScript online submissions for Contains Duplicate.
