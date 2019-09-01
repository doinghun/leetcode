### Problem

You are climbing a stair case. It takes n steps to reach to the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
Note: Given n will be a positive integer.

Example 1:
```
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```
Example 2:
```
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

### Attempt
- Dynamic Programming 

Simple but slow runtime (no memoization(?))
```javascript

var climbStairs = function(n) {
    if(n === 0)  return 0
    if(n === 1)  return 1
    if(n === 2)  return 2
    else{
        return climbStairs(n-1) + climbStairs(n-2)
    }
};
```

Fast vers w memoization
```javascript
var climbStairs = function(n) {
    if(n === 0)  return 0
    if(n === 1)  return 1
    if(n === 2)  return 2

    var arr = [1,2]
    for(i = 2; i < n; i++) {
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[n-1]
};
```
Result
- Runtime: 48 ms, faster than 88.17% of JavaScript online submissions for Climbing Stairs.
- Memory Usage: 33.8 MB, less than 84.00% of JavaScript online submissions for Climbing Stairs.
