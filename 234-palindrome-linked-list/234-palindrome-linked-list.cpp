/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    bool isPalindrome(ListNode* head) {
        ListNode *slow = head, *fast = head;
        ListNode *prev, *temp;
        
        // Floyds algo to find end and middle
        while (fast && fast->next) 
            slow = slow->next, fast = fast->next->next;
        
        // Start the reversal
        prev = slow;
        slow = slow->next;
        prev->next = nullptr;
        
        // Reverse everything from slow till the end
        while (slow) {
            temp = slow->next;
            slow->next = prev;
            prev = slow;
            slow = temp;
        }
        
        // Prev now always points to the last node in the list
        fast = head;
        slow = prev;
        
        // Now Compare
        while (slow) {
            if (fast->val != slow->val) return false;
            slow = slow->next;
            fast = fast->next;
        }
        
        return true;
    }
};