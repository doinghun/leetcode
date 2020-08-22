### Problem

Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.

Example 1:
```
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
```
Example 2:
```
Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
```
Example 3:
```
Input: nums = [1,2,3]
Output: 0
```

### Attempt 1

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const n = nums.length;
    let ans = 0;
    for(let i=0; i<= n-1; i++){
        for(let j=i+1; j<=n-1; j++){
            if(nums[i] === nums[j]){
                ans++;
            }
        }
    }
    return ans
};
```

- Time Complexity: `O(n^2)`
- Space Complexity: `O(1)`

### Optimised Time Solution

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numIdenticalPairs = function(nums) {
    const map = {};
    let count = 0;
    nums.forEach(num => {
        if (map[num]) {
            count += map[num];
            map[num]++;
        } else {
            map[num] = 1;
        }
    })
    return count;
};
```
- Time Complexity: `O(N)`
- Space Complexity: `O(N)`