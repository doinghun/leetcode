/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    const isInBetween = (val) => val >= L && val <= R;
    
    const addSum = (val, sum) => isInBetween(val) ? sum += val : sum;
    
    const preOrder = (root, sum) => {
        if(!root) return sum;
        return addSum(root.val, sum) + preOrder(root.left, sum) + preOrder(root.right, sum)
    }
    return preOrder(root,0)
};