```javascript
var isSymmetric = function(root) {
    if (root ==null) 
        return true;

    function isSymmetricSubTree(left, right){
        if(left == null && right == null) return true;
        if(left == null || right == null) return false;
        if(left.val == right.val ) {
            return isSymmetricSubTree(left.left, right.right) && isSymmetricSubTree(left.right, right.left);
        }else 
            return false;
        }
    
    return isSymmetricSubTree(root.left, root.right);
};
```

__Result__
- Runtime: 72 ms, faster than 17.80% of JavaScript online submissions for Symmetric Tree.
- Memory Usage: 35.6 MB, less than 70.00% of JavaScript online submissions for Symmetric Tree.