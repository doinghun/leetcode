### Problem

Given a binary tree, return the sum of values of its deepest leaves.

**Example 1:**
```
Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15
```

Constraints:
- The number of nodes in the tree is between 1 and 10^4.
- The value of nodes is between 1 and 100.

### Attempt

- Tree problems can usually be solved by recursive / iterative approach.
- Since the BST takes lower number to the left of a node & higher number to the right, the number on the middle should be the most parent node.

**Attempt 1 (Level/Breadth-First Search Traversal)**

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
  if (root == null) return []
  let result = []
  let queue = [root]
  while (queue.length) {
    let size = queue.length
    let temp = []
    for (i = 0; i < size; i++) {
      // iterate through # of child nodes
      let node = queue.shift() // queue uses shift vs stack uses pop (see Note)
      temp.push(node.val)
      if (node.left) {
        queue.push(node.left) // queue left subtree first
      }
      if (node.right) {
        queue.push(node.right) // queue right subtree after left subtree
      }
    }
    result.push(temp)
  }
  return result[result.length-1].reduce((a, b) => a + b, 0);
}
```
