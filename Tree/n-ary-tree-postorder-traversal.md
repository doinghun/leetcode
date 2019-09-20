### Problem
Given an n-ary tree, return the postorder traversal of its nodes' values.
Return its postorder traversal as: `[5,6,3,2,4,1]`.

### Solution

```javascript
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    if(!root) return []
    let ans = [];
    let stack = [root];
    while(stack.length){
        let node = stack.pop() // 1 -> 4 -> 2 -> 3 -> 6 -> 5
        ans.unshift(node.val) // 5,6,3,2,4,1
        if(!node.children) continue; //skip if no node.children
        for(i=0;i<node.children.length;i++){ //add children by sequence
            stack.push(node.children[i]); 
        }
    }
    return ans;
};
```

__Result__
- Runtime: 604 ms, faster than 66.11% of JavaScript online submissions for N-ary Tree Postorder Traversal.
- Memory Usage: 81.1 MB, less than 14.29% of JavaScript online submissions for N-ary Tree Postorder Traversal.