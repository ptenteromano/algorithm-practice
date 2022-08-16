/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func swapPairs(head *ListNode) *ListNode {
    if head == nil || head.Next == nil {
        return head
    }
    
    curr := head
    start := head.Next
    
    for curr != nil {
        newEnd := swapTwo(curr)
        
        if newEnd == nil || newEnd.Next == nil {
            return start
        }
        
        curr = newEnd.Next
        
        if newEnd.Next.Next != nil {
            newEnd.Next = newEnd.Next.Next
        }
    }
    
    return start
}

func swapTwo(first *ListNode) *ListNode {
    if first == nil || first.Next == nil {
        return first
    }
    
    second := first.Next
    first.Next = second.Next
    second.Next = first

    return first
}