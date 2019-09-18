### 1st Attempt

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    //Brute Force
    for(i=nums.length;i>=0;i--){
        if(nums[i] == 0){
            nums.splice(i,1)
            nums.push(0)
        }
    }
};
```
Result
- Runtime: 64 ms, faster than 62.38% of JavaScript online submissions for Move Zeroes.
- Memory Usage: 36 MB, less than 25.53% of JavaScript online submissions for Move Zeroes.

### 2nd Attempt

```javascript
var moveZeroes = function(nums) {
    let leftMostZeroIndex = 0; // The index of the leftmost zero
    for (i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            if (i > leftMostZeroIndex) { // There are zero(s) on the left side of the current non-zero number, swap!
                nums[leftMostZeroIndex] = nums[i];
                nums[i] = 0;
            }

            leftMostZeroIndex++;
        }
    }
};
```