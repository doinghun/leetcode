### Problem

Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example 1:
```
Input: a = 1, b = 2
Output: 3
```
Example 2:
```
Input: a = -2, b = 3
Output: 1
```

### Attempt

- Bitwise Arithmetic Operation
- [Explanation](https://www.youtube.com/watch?v=qq64FrA2UXQ)

```javascript
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let a_bit = (a >>> 0).toString(2)
    let b_bit = (b >>> 0).toString(2)
    
    var sum = a^b; //XOR
    var carry = (a&b) << 1; //Left shift a AND b
    
    if(sum & carry){
        return getSum(sum,carry)
    }
    else {
        return sum ^ carry;
    }
};
```
#### Result
- Runtime: 52 ms
- Memory Usage: 33.9 MB

OR

```javascript
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
     return b==0? a:getSum(a^b, (a&b)<<1);
};
```
#### Result
- Runtime: 60 ms
- Memory Usage: 33.8 MB
