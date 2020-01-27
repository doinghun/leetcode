### Problem

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

<!-- more -->

Example 1:

```
Input: "A man, a plan, a canal: Panama"
Output: true
```

Example 2:

```
Input: "race a car"
Output: false
```

[Question Source - Leetcode](https://leetcode.com/problems/valid-palindrome/)

### Solution

#### Recursion

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s.length == 0) return true
  let str = toAlphaNumeric(s)
  return palindromeChecker(str)
}

function toAlphaNumeric(s) {
  let newStr = ""
  for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i)
    if (
      (code > 47 && code < 58) || // numeric (0-9)
      (code > 64 && code < 91) || // upper alpha (A-Z)
      (code > 96 && code < 123)
    ) {
      // lower alpha (a-z)
      newStr += s[i]
    }
  }
  return newStr.toLowerCase()
}

function palindromeChecker(str) {
  if (str.length <= 1) return true
  if (str.length == 2) return str[0] === str[1]
  if (str[0] === str[str.length - 1])
    return palindromeChecker(str.substring(1, str.length - 1))
  return false
}
```
