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

- Time Complexity: O(N logN)
- Space Complexity: O(1)

### Attempt 2 (Optimised)
- Using Set
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set(nums)
    if(set.size === nums.length) return false;
    return true;
};
```
- Time Complexity: O(N) // search operation
- Space Complexity: O(N)
