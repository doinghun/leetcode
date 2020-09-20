---
title: 1572. Matrix Diagonal Sum
---

### Problem

Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

Example 1:
```
Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.
```
Example 2:
```
Input: mat = [[1,1,1,1],
              [1,1,1,1],
              [1,1,1,1],
              [1,1,1,1]]
Output: 8
```
Example 3:
```
Input: mat = [[5]]
Output: 5
```

Constraints:
- n == mat.length == mat[i].length
- 1 <= n <= 100
- 1 <= mat[i][j] <= 100

### Attempt 1

```js
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    let n = mat.length;
    for(let i=0; i<n; i++){
        if(i == n-i-1){
            sum += mat[i][i]
        } else {
            sum += mat[i][i] + mat[i][n-i-1]
        }
    }
    return sum
};
```

- Time Complexity: `O(n)`
- Space Complexity: `O(1)`