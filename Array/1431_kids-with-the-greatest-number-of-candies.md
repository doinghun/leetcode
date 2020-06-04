### Problem

Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

Example 1:
```
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
```
Example 2:
```
Input: candies = [4,2,1,1,2], extraCandies = 1
Output: [true,false,false,false,false] 
```
Example 3:
```
Input: candies = [12,1,12], extraCandies = 10
Output: [true,false,true]
```

### Solution

```py
class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        ans = List[bool]
        for i in candies:
            if (i+extraCandies) >= max(candies):
                ans.append(True)
            else:
                ans.append(False)
        return ans
```