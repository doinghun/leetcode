Question
```
Input: [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
```

Answer
```javascript
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    var arr = [];
    var ans = []
    for(i=0;i<A.length;i++){
        arr = A[i].reverse();
        for(j=0;j<arr.length;j++){
            if(arr[j]==0) arr[j] += 1
            else arr[j] -= 1;
        }
        ans.push(arr)
    }
    return ans
};
```
