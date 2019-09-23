### Approach

- Stated Easy difficulty but very hard to come up with answer without hint
- Referred to discussion solution (https://leetcode.com/problems/path-sum-iii/discuss/91889/Simple-Java-DFS)

```javascript
var pathSum = function(root, sum) {
    if(!root) return 0
    return nodeSum(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
    
    function nodeSum(node,sum){
        if(!node) return 0
        return (node.val == sum ? 1 : 0) + nodeSum(node.left, sum - node.val) + nodeSum(node.right, sum - node.val)
    }
};
```

- Space: O(n) due to recursion.
- Time: O(n^2) in worst case (no branching); O(nlogn) in best case (balanced tree).