Approach

1. Brute Force
- Convert Linked List into Array
- Compare reversed array to array
- return false if not same

```javascript
var isPalindrome = function(head) {
    if(head == null) return true
    let arr = []
    while(head){
       arr.push(head.val)
       head = head.next
   }
    const arr1 = [...arr] //copy original array to arr1
    arr.reverse()
    for(i=0;i<arr.length;i++){
        if(arr[i] !== arr1[i]) return false
    }
    return true
};
```

2. O(n) Time & O(1) Space
- Manipulating Linked List ; 1 run & no extra space
    1. Place pointers on End & Half point 
    2. Reverse half the list
    3. Compare 1st & 2nd half
    Corner case - odd nodes

```javascript
var isPalindrome = function(head) {
    let fast = head
    let slow = head
    while (fast !== null && fast.next !== null) { //same logic as linked list cycle
        fast = fast.next.next
        slow = slow.next
    }
    if(fast !== null) { //odd nodes: let right half smaller
        slow = slow.next
    }
    slow = reverse(slow)
    fast = head

    while (slow !== null) {
        if (fast.val !== slow.val) {
            return false;
        }
        fast = fast.next;
        slow = slow.next;
    }
    return true;

function reverse(head){ // same logic as reverse linked list
    let cur = null
    let prev = null
    while(head !== null){
        cur = head
        head = head.next
        cur.next = prev
        prev = cur
    }
    return prev
}
    
};
```
