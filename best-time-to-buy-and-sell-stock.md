### Attempt 1

- More intuitive
```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var min = Number.MAX_SAFE_INTEGER; //Max possible number
    var maxProfit = 0;
    for(i=0;i<prices.length;i++){
        min = Math.min(min, prices[i])
        maxProfit = Math.max(maxProfit, prices[i]-min)
    }
    return maxProfit
};
```

#### Result
- Runtime: 80 ms
- Memory Usage: 35.8 M

### Attempt 2
- Maximum Subarray Method
- [Kadane's Algorithm](https://en.wikipedia.org/wiki/Maximum_subarray_problem)
```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var maxCur = 0, maxSoFar = 0;
        for(var i = 1; i < prices.length; i++) {
            maxCur = Math.max(0, maxCur += prices[i] - prices[i-1]);
            maxSoFar = Math.max(maxCur, maxSoFar);
        }
        return maxSoFar;
};
```

#### Result
- Runtime: 52 ms
- Memory Usage: 35.6 MB
