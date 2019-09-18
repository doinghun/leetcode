### Attempt 1

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let maxNum = nums.length
    const set1 = new Set();
    for(i=1;i<=maxNum;i++){
        set1.add(i)
    }
    nums.forEach((el) => {
        if(set1.has(el)){
            set1.delete(el)
        }
    })
    return Array.from(set1)
};
```

Result
- Runtime: 124 ms
- Memory Usage: 52.4 MB