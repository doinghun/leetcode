---
title: 1266. Minimum Time Visiting All Points
topic: [Array, Max/Min Path Sum]
---

### Problem

On a plane there are n points with integer coordinates points[i] = [xi, yi]. Your task is to find the minimum time in seconds to visit all points.

You can move according to the next rules:

In one second always you can either move vertically, horizontally by one unit or diagonally (it means to move one unit vertically and one unit horizontally in one second).
You have to visit the points in the same order as they appear in the array.
Example 1:

```
Input: points = [[1,1],[3,4],[-1,0]]
Output: 7
Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   
Time from [1,1] to [3,4] = 3 seconds 
Time from [3,4] to [-1,0] = 4 seconds
Total time = 7 seconds
```

Example 2:

```
Input: points = [[3,2],[-2,2]]
Output: 5
```

Constraints:

points.length == n
1 <= n <= 100
points[i].length == 2
-1000 <= points[i][0], points[i][1] <= 1000
### Solution

#### Brute Force

```js
/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let sum = 0;
    for(let i=0; i<points.length-1; i++){
        let start = points[i];
        let end = points[i+1];
        let isAsc = (end[0] - start[0]) > 0;
        while(start[0] !== end[0] || start[1] !== end[1]){
             let deltaX = Math.abs(end[0] - start[0]);
             let deltaY = Math.abs(end[1] - start[1]);
             // Diagonal
             if((deltaX > 0) && (deltaY > 0)){
                 isAsc ? start[0]++ : start[0]--;
                 isAsc ? start[1]++ : start[1]--;
                 sum++;
             }
             // Vertical
             else if((deltaX === 0) && (deltaY > 0)){
                 isAsc ? start[1]++ : start[1]--;
                 sum++;
             }
             // Horizontal
              else if((deltaY === 0) && (deltaX > 0)){
                 isAsc ? start[0]++ : start[0]--;
                 sum++;
             }
         }
    }
    return sum
};
```

- Time Complexity: `O(n^2)`
- Space Complexity: `O(1)`

*Exceeds Max Time*

#### Optimised Solution (Min Path Sum)

```js
/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let sum = 0;
    for(let i=0; i<points.length-1; i++){
        let start = points[i];
        let end = points[i+1];
        sum += Math.max(Math.abs(end[0] - start[0]), Math.abs(end[1] - start[1]));
    }
    return sum
};
```

- Time Complexity: `O(n)`
- Space Complexity: `O(1)`