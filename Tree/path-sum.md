### Problem

Given a binary tree & a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: root-to-leaf path means it much goes to the bottom of the tree until it has no children

### Approach

- Depth First Search Recursive Solution

```javascript
var hasPathSum = function(root, sum) {
    if(!root) return false
    if(root.left == null && root.right == null && sum - root.val == 0) return true //Make sure it's root-to-leaf-path & sum is zero
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
};
```

