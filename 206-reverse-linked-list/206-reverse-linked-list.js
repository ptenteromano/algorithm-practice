/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || head.next === null) return head;
    
    let endOfList = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return endOfList;
};