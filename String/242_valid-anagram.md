### Problem

Given two strings s and t , write a function to determine if t is an anagram of s.

<!-- more -->

Example 1:

```
Input: s = "anagram", t = "nagaram"
Output: true
```

Example 2:

```
Input: s = "rat", t = "car"
Output: false
```

Note:
You may assume the string contains only lowercase alphabets.

### Approach

#### 1st Attempt - Brute Force

```javascript
var isAnagram = function(s, t) {
  //corner case
  if (s.length !== t.length) return false
  if (s.length == 0) return true
  // Create Array
  let ans = []
  for (i = 0; i < s.length; i++) {
    ans.push(s[i])
  }
  // Check through Array & Delete if present
  for (j = 0; j < t.length; j++) {
    let n = ans.indexOf(t[j])
    if (n > -1) {
      ans.splice(n, 1)
    }
  }
  return ans.length == 0 ? true : false
}
```

#### 2nd Attempt - hashmap with alphabet & its count (More Efficient)

```javascript
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  const map = {}

  for (let i = 0; i < s.length; i++) {
    map[s[i]] ? map[s[i]]++ : (map[s[i]] = 1)
  }

  for (let i = 0; i < t.length; i++) {
    if (map[t[i]]) map[t[i]]--
    else return false
  }

  return true
}
```

### Take Away & Review

- Did not take into account that same alphabet can be stacked.
- In the 2nd Attempt, it's as easy as increasing the alphabet value in the map at 's' loop and decreasing the alphabet value in the map at 't' loop. If the map is empty at the end of the function, it is true.

---

_[Question Source](https://leetcode.com/problems/valid-anagram)_
