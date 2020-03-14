### Problem

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

<!-- more -->

For example, given n = 3, a solution set is:

```
["((()))", "(()())", "(())()", "()(())", "()()()"];
```

[Question Source - Leetcode](https://leetcode.com/problems/generate-parentheses/)

### Solution

- Uses Backtracking Technique

```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = [];
  let par = "";
  backtrack(res, par, 0, 0, n);
  return res;
};

const backtrack = (res, par, open, close, max) => {
  if (par.length == max * 2) {
    //base case - str has 6 parentheses
    res.push(par);
    return;
  }

  if (open < max)
    // add open parenthesis
    backtrack(res, par + "(", open + 1, close, max); //recursive call after increasing open by 1
  if (close < open)
    // add corresponding close parenthesis
    backtrack(res, par + ")", open, close + 1, max);
};
```
