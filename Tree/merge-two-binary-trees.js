/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if(t1 == null)
        return t2
    if(t2 == null)
        return t1
    t1.val = t1.val + t2.val
    t1.left = mergeTrees(t1.left, t2.left)
    t1.right = mergeTrees(t1.right, t2.right)
    return t1 
};

/*
Runtime: 92 ms, faster than 53.44% of JavaScript online submissions for Merge Two Binary Trees.
Memory Usage: 40.2 MB, less than 84.62% of JavaScript online submissions for Merge Two Binary Trees.
*/