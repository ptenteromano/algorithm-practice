class Solution {
public:
    int search(vector<int>& nums, int target) {
        int pivot, leftIdx = 0, rightIdx = nums.size() - 1;
        
        while (leftIdx <= rightIdx) {
            pivot = (rightIdx + leftIdx) / 2;
            
            if (nums[pivot] == target) 
                return pivot;
            
            if (nums[pivot] > target)
                rightIdx = pivot - 1;
            else 
                leftIdx = pivot + 1;
        }
        
        return -1;
    }
};