/*Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0);
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  // Move fast n steps ahead
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // Move both fast and slow until fast reaches the end
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // Remove the nth node from end
  slow.next = slow.next.next;

  return dummy.next;
};