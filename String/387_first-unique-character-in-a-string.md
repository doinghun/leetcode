### Problem

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

**Example:**

```
s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
```

### Attempt

**1st Attempt**

- Create map that stores alphabets as key and its frequency as values.
- Convert alphabet to integer

```javascript
var firstUniqChar = function(s) {
  let map = {}
  for (i = 0; i < s.length; i++) {
    //initialise map
    //if specific letter exist, 1. Otherwise, increase by 1
    map[s[i]] ? map[s[i]]++ : (map[s[i]] = 1)
  }
  let keys = Object.keys(map) //convert obj key to array
  let vals = Object.values(map) //convert obj value to array
  let index = vals.indexOf(1) //find position with alphabet count 1 in val arr
  let letter = ""
  if (index == -1) return -1
  //corner case
  else {
    letter = keys[index] //find position in key arr
  }
  return s.indexOf(letter)
}
```

- Runtime: 100 ms, faster than 49.16% of JavaScript online submissions for First Unique Character in a String.
- Memory Usage: 38.4 MB, less than 60.00% of JavaScript online submissions for First Unique Character in a String.

**2nd Attempt (More Effieicient)**

```javascript
var firstUniqChar = function(s) {
  let freq = new Array(26).fill(0)
  for (i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - 97]++
  }
  for (i = 0; i < s.length; i++) {
    if (freq[s.charCodeAt(i) - 97] == 1) return i
  }
  return -1
}
```

- Runtime: 60 ms, faster than 99.53% of JavaScript online submissions for First Unique Character in a String.
- Memory Usage: 37.8 MB, less than 82.50% of JavaScript online submissions for First Unique Character in a String.

---

_[Source - Leetcode](https://leetcode.com/problems/first-unique-character-in-a-string/)_
