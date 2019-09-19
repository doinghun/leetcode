### Brute Force Method
_Assuming there is only 2 types of elements in the array (not mentioned in the question)_
- Time Complexity: O(n²)
- Space Complexity: O(1)

```javascript
var majorityElement = function(nums) {
    let majorityNum = nums.length/2
    for(i=0;i<nums.length;i++){
        let count = 0;
        for(j=0;j<nums.length;j++){
            if(nums[j] == nums[i]) count ++
        }
        if(count > majorityNum) return nums[i]
    }
};
```

__Result__
- Runtime: 4792 ms, faster than 5.46% of JavaScript online submissions for Majority Element.
- Memory Usage: 37.5 MB, less than 57.14% of JavaScript online submissions for Majority Element.

### Hashmap Method
- Time Complexity: O(n)
- Space Complexity: O(n)

```javascript
var majorityElement = function(nums) {
   var letterHash = {};
    for (var x = 0; x < nums.length; x++) {
      if (letterHash[nums[x]]) {
        letterHash[nums[x]] += 1;
      } else {
        letterHash[nums[x]] = 1; 
      }
      if(letterHash[nums[x]] > nums.length/2) return nums[x]
    }
};
```

__Result__
- Runtime: 72 ms
- Memory Usage: 37.9 MB