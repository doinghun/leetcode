## Problem

Given two binary trees, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

<!--more-->

Example 1:

```
Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
```

Example 2:

```
Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
```

Example 3:

```
Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
```

## Solution

- Iterative Approach

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  let stack1 = [p]
  let stack2 = [q]
  // Base Case
  if (p == null && q == null) return true
  if (p == null && q !== null) return false
  if (p !== null && q == null) return false

  //Tree Traversal for p & q simultaneously
  while (stack1.length) {
    //Unload Stack
    let tn1 = stack1.pop()
    let tn2 = stack2.pop()
    //Check if node have same value
    if (tn1.val !== tn2.val) return false
    //Check if node have same structure - null hell
    if (tn1.left == null && tn2.left != null) {
      //left
      return false
    } else if (tn1.left != null && tn2.left == null) {
      //left
      return false
    } else if (tn1.right == null && tn2.right != null) {
      //right
      return false
    } else if (tn1.right != null && tn2.right == null) {
      //right
      return false
    }
    //Assuming all same, traverse tree using stack
    if (tn1.right) stack1.push(tn1.right)
    if (tn2.right) stack2.push(tn2.right)
    if (tn1.left) stack1.push(tn1.left)
    if (tn2.left) stack2.push(tn2.left)
  }
  return true
}
```

- Time Complexity: `O(n)`
- space Complexity: `O(n)`
