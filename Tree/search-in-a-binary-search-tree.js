/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    //corner cases
    if(root == null) return root
    if(root.val == val) return root
    //recursion
    else if(root.val > val){
        return searchBST(root.left,val)
    }
    else if(root.val < val){
        return searchBST(root.right,val)
    }
};

/*
Runtime: 80 ms, faster than 58.33% of JavaScript online submissions for Search in a Binary Search Tree.
Memory Usage: 41.8 MB, less than 56.25% of JavaScript online submissions for Search in a Binary Search Tree.
*/