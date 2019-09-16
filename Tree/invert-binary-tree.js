/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    //Corner Case
    if(root == null) return null
    //Recursion
    let left = root.left
    let right = root.right
    root.left = invertTree(right)
    root.right = invertTree(left)
    return root
};

/*
- Runtime: 60 ms, faster than 23.91% of JavaScript online submissions for Invert Binary Tree.
- Memory Usage: 33.8 MB, less than 60.00% of JavaScript online submissions for Invert Binary Tree.
*/