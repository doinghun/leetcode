### Approach

- Related to [Maximum Depth](./maximum-depth-of-binary-tree.js) Problem
- Recursive Solution
    1. For each node, find max of each left_depth & right_depth
    2. For each node, diameter = left_diameter + right_diameter
    3. Return max of all diameters (longest path might not be from the top node)

```javascript
var diameterOfBinaryTree = function(root) {
    if(root == null) return 0
    
    var depth = function(root) {
        if(root == null) return 0
        return Math.max(depth(root.left),depth(root.right)) + 1
    }
    
    let diameter = depth(root.left) + depth(root.right)
    let left_diameter = diameterOfBinaryTree(root.left)
    let right_diameter = diameterOfBinaryTree(root.right)
    return Math.max(diameter,Math.max(left_diameter,right_diameter))
};
```

__Result__
- Runtime: 92 ms, faster than 8.97% of JavaScript online submissions for Diameter of Binary Tree.
- Memory Usage: 37.6 MB, less than 12.50% of JavaScript online submissions for Diameter of Binary Tree.

_Reference: https://www.youtube.com/watch?v=ey7DYc9OANo_