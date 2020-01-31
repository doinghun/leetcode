### Problem

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:
```
Input: [3,4,5,1,2] 
Output: 1
```

Example 2:
```
Input: [4,5,6,7,0,1,2]
Output: 0
```

### Attempt
- [Binary Search Method](https://en.wikipedia.org/wiki/Binary_search_algorithm)
- Performance - O(log n)
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0, right = nums.length-1;
    while(left < right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid] > nums[right]){
            left = mid + 1;
        }
        else if(nums[mid] < nums[right]){
            right = mid;
        }
    }
    return nums[left]
};
```

- Time Complexity: O(Log N)
- Space Complexity: O(1)
