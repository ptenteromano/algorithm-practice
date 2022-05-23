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
        std::vector< int > arr;
        
        while (head != nullptr) {
            arr.push_back(head->val);
            head = head->next;
        }
        int leftIdx = 0, rightIdx = arr.size() - 1;
        
        while (leftIdx < rightIdx) {
            if (arr[leftIdx] != arr[rightIdx])
                return false;
            leftIdx++;
            rightIdx--;
        }
        
        return true;
    }
};