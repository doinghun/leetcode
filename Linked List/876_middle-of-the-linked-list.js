/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    /* pseudocode
    1. Traverse list & get middle number
    2. Get the middle node val
    */
    let length = 0;
    let counter = 0;
	let current = head;
    while(head.next) {
        head = head.next
        length++
    }
    let middleIdx = Math.ceil(length/2)
	if(middleIdx < 0 || middleIdx >= this.length) return null;
	while(counter !== middleIdx){
		current = current.next;
		counter++;
	}
    return current
};
