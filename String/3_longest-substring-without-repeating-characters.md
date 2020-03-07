### Problem

Given a string, find the length of the longest substring without repeating characters.

<!--more-->

Example 1:

```
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

Example 2:

```
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

Example 3:

```
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
```

Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

[Question Source - leetcode](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

### Solution

Sliding Window Technique

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let maxSubstr = "";
  let max = 0;
  /* Extract first max non-repeating substr */
  for (i = 0; i < s.length; i++) {
    let index = maxSubstr.indexOf(s[i]);
    //construct maximum substring
    maxSubstr += s[i];
    //cut out constructed max subarray
    if (index >= 0) maxSubstr = maxSubstr.substring(index + 1);
    //save maximum length
    max = Math.max(max, maxSubstr.length);
  }
  return max;
};
```

- Time Complexity: O(N)
- Space Complexity: O(1)

### Review

- X -> Cutting out at position after max subarray instead of after the repeated array (eg. abcabc - abc,abc vs abc, bca, cab)
