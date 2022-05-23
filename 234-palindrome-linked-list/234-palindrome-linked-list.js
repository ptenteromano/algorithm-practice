/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const arr = [];
    
    while (head != null) {
        arr.push(head.val);
        head = head.next;
    }
    
    let leftIdx = 0, rightIdx = arr.length - 1; 
    
    while (leftIdx < rightIdx) {
        if (arr[leftIdx] !== arr[rightIdx]) return false;
        
        leftIdx++;
        rightIdx--;
    }
    
    return true;
};