### Strategy (Iteration)

1. Create dummy head
2. Create cur as pointer  
3. While l1 & l2 is not null, Compare l1 head & l2 head 
4. Lower number gets the placement on cur & if placed, advance l1 / l2 pointer
5. If one of the list pointer ends, assign remaining list to cur

### Iterative Solution

```javascript
var mergeTwoLists = function(l1, l2) {
    let dummyHead = { val : -1, next : null}
    let cur = dummyHead //cur is a pointer
    while(l1 && l2){
        if(l1.val <= l2.val){ //l1 gets the placement
            cur.next = l1
            l1 = l1.next //advance pointer
        }
        else{ //l2 gets the placement
            cur.next = l2
            l2 = l2.next //advance pointer
        }
        cur = cur.next //advance cur
    }
    cur.next = l1 !== null ? l1:l2 //if one of list is null then merge the other list 
    return dummyHead.next
};
```

__Result__
- Runtime: 52 ms, faster than 98.66% of JavaScript online submissions for Merge Two Sorted Lists.
- Memory Usage: 35.6 MB, less than 46.15% of JavaScript online submissions for Merge Two Sorted Lists.
- Time Complexity : O(m + n)
- Space Complexity : O(1)