### Problem

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

![image](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg)

Example:

```
Input: [1,8,6,2,5,4,8,3,7]
Output: 49
```

### Solution

#### Brute Force

1. Set Two Pointers i, j (j should be i+1)
2. Calculate local Area (height, minimum of height i vs j \* distance, j-i)
3. Deduce greater Area between current Area vs previous Area and save as maxArea

```javascript
var maxArea = function(height) {
  let maxarea = 0
  for (i = 0; i < height.length; i++)
    for (j = i + 1; j < height.length; j++)
      maxarea = Math.max(maxarea, Math.min(height[i], height[j]) * (j - i))
  return maxarea
}
```

- Time Complexity: O(n^2^)
- Space Complexity: O(1)

#### Two Pointers

Since `Area = height * distance`, since moving the pointers means decreasing the distance (`j-i`), for Area to be higher than before, `height` must be higher. Thus, we move between `height[i]` vs `height[j]`, whichever is lower in value.

```javascript
var maxArea = function(height) {
  let maxarea = 0
  let i = 0,
    j = height.length - 1
  while (i < j) {
    maxarea = Math.max(maxarea, Math.min(height[i], height[j]) * (j - i))
    height[i] < height[j] ? i++ : j--
  }
  return maxarea
}
```

- Time Complexity: O(n)
- Space Complexity: O(1)
