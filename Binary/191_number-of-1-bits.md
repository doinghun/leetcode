### Problem

Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).

Example 1:

```
Input: 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
```

Example 2:

```
Input: 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
```

Example 3:

```
Input: 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
```

_[Question Source: LeetCode](https://leetcode.com/problems/number-of-1-bits/)_

### Attempt

#### Brute Force

- Change `n` to binary using `Number.toString(2)`
- Store in String using template literal
- Iterate & count 1

```javascript
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let str = `${n.toString(2)}`
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "1") count++
  }
  return count
}
```

#### Bit Manipulation

- Rule of Thumb:
  - Even number always ends with 0 & odd number always ends with 1
  - `1 & 0 == 0` -> removes one
- `n & (n-1)` drops 1 each time

```javascript
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0

  while (n) {
    n = n & (n - 1)
    count++
  }

  return count
}
```

---

_Reference_
[Bits, Bytes, Building With Binary](https://medium.com/basecs/bits-bytes-building-with-binary-13cb4289aafa)
