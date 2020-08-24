### Problem

Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

**Example**:

```
n = 15,
return
["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
```

### Approach

1. Iterative approach
2. Using modulo (%) to filter out 3 & 5
3. To filter 15, 3 & 5 must be excluded first
4. Numbers must be turned to integer

```javascript
var fizzBuzz = function(n) {
  let ans = []
  for (i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 !== 0) {
      ans.push("Fizz")
    } else if (i % 5 == 0 && i % 3 !== 0) {
      ans.push("Buzz")
    } else if (i % 15 == 0) {
      ans.push("FizzBuzz")
    } else {
      ans.push(i.toString())
    }
  }
  return ans
}
```