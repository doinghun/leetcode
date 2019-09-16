/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 var reverseList = function(head) {
    if(head == null) return null
    
    //Iterative Solution
    let cur = null
    let prev = null
    while(head !== null){
        cur = head
        head = head.next
        cur.next = prev
        prev = cur
    }
    return prev
};

/*
- Runtime: 60 ms, faster than 56.03% of JavaScript online submissions for Reverse Linked List.
- Memory Usage: 34.9 MB, less than 73.91% of JavaScript online submissions for Reverse Linked List.
*/