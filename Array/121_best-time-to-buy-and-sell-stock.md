### Attempt 1

- More intuitive

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var min = Number.MAX_SAFE_INTEGER; //Max possible number
  var max_profit = 0;
  for (i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max_profit = Math.max(max_profit, prices[i] - min);
  }
  return max_profit;
};
```

- Time Complexity: O(n)
- Space Complexity: O(1)

### Attempt 2

- Maximum Subarray Method
- [Kadane's Algorithm](https://en.wikipedia.org/wiki/Maximum_subarray_problem)

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var maxCur = 0,
    maxSoFar = 0;
  for (var i = 1; i < prices.length; i++) {
    maxCur = Math.max(0, (maxCur += prices[i] - prices[i - 1]));
    maxSoFar = Math.max(maxCur, maxSoFar);
  }
  return maxSoFar;
};
```

- Time Complexity: O(n)
- Space Complexity: O(1)
