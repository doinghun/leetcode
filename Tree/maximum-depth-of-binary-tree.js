/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root === null || root === undefined) return 0
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
};
/*
Runtime: 60 ms, faster than 77.22% of JavaScript online submissions for Maximum Depth of Binary Tree.
Memory Usage: 37.2 MB, less than 40.63% of JavaScript online submissions for Maximum Depth of Binary Tree.
*/
// Reference - https://www.youtube.com/watch?v=YT1994beXn0
