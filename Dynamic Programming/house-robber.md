### Approach

- Did not realise it was a DP problem so tried double for-loop but failed
- Referred to this great guide in the discussion (https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems.)

This particular problem and most of others can be approached using the following sequence:

1. Find recursive relation
2. Recursive (top-down)
3. Recursive + memo (top-down)
4. Iterative + memo (bottom-up)
5. Iterative + N variables (bottom-up)

__Step 1. Figure out recursive relation.__
A robber has 2 options: a) rob current house i; b) don't rob current house.
If an option "a" is selected it means she can't rob previous i-1 house but can safely proceed to the one before previous i-2 and gets all cumulative loot that follows.
If an option "b" is selected the robber gets all the possible loot from robbery of i-1 and all the following buildings.
So it boils down to calculating what is more profitable:

- robbery of current house + loot from houses before the previous
- loot from the previous house robbery and any loot captured before that
`rob(i) = Math.max( rob(i - 2) + currentHouseValue, rob(i - 1) )`

__Step 2. Recursive (Top-Down)__
Converting the recurrent relation from Step 1
```javascript
var rob = function(nums) {
    return robHelper(nums, nums.length - 1)
    
    function robHelper(nums, i){
        if(i < 0){
            return 0
        }
        return Math.max(robHelper(nums, i-2) + nums[i],robHelper(nums, i-1))
    }
};
```
This algorithm will process the same i multiple times and it needs improvement. Time complexity: [to fill]

__Step 3. Recursive + memo (Top-Down)__
```javascript
var rob = function(nums) {
    memo = new Array(nums.length)
    memo.fill(-1)
    return robHelper(nums,nums.length-1)
    
    function robHelper(nums, i){
        if(i < 0) return 0
        if(memo[i] >= 0) return memo[i]
        let result = Math.max(robHelper(nums,i-2) + nums[i], robHelper(nums,i-1))
        memo[i] = result
        return result
    } 
};
```
Much better, this should run in `O(n)` time. Space complexity is `O(n)` as well, because of the recursion stack, let's try to get rid of it.
_[Memoization Reference](https://scotch.io/tutorials/understanding-memoization-in-javascript)_

__Step 4. Iterative + memo (Bottom-Up)__
```javascript
var rob = function(nums) {
    if(nums.length == 0) return 0
    memo = new Array(nums.length+1)
    memo[0] = 0
    memo[1] = nums[0]
    for(i = 1; i < nums.length; i++){
        let val = nums[i]
        memo[i+1] = Math.max(memo[i], memo[i-1] + val)
    }
    return memo[nums.length]
}
```

__Step 5. Iterative + 2 variables (Bottom-Up)__
```javascript
var rob = function(nums) {
    if (nums.length == 0) return 0;
    var prev1 = 0;
    var prev2 = 0;
    for (num if nums) {
        var tmp = prev1;
        prev1 = Math.max(prev2 + num, prev1);
        prev2 = tmp;
    }
    return prev1;
}
```