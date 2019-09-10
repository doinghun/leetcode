/* BRUTE FORCE ANSWER
var singleNumber = function(nums) {
    for(i=0;i<nums.length;i++){
        let temp = nums[i]
        nums.splice(i,1)
        if(nums.indexOf(temp) == -1) return temp
        nums.splice(i,0,temp)
    }
};
*/

// Bit Manipulation Answer
var singleNumber = function(nums) {
    let result = 0;
    nums.forEach((el)=>{
        result ^= el
    })
    return result
};

/* Explanation
Let's say we have an array - [2,1,4,5,2,4,1].
What we are doing is essentially this-
=> 0 ^ 2 ^ 1 ^ 4 ^ 5 ^ 2 ^ 4 ^ 1
=> 0^ 2^2 ^ 1^1 ^ 4^4 ^5 (Rearranging, taking same numbers together)
=> 0 ^ 0 ^ 0 ^ 0 ^ 5
=> 0 ^ 5
=> 5
*/