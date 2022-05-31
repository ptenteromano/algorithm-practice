class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int rightIdx = nums.size() - 1;
        int leftIdx = 0, count = 0, temp;

        while (leftIdx <= rightIdx)
        {
          if (nums[rightIdx] == val)
          {
            rightIdx--;
            count++;
            continue;
          }

          // Swap
          if (nums[leftIdx] == val)
          {
            temp = nums[rightIdx];
            nums[rightIdx] = nums[leftIdx];
            nums[leftIdx] = temp;
              
            rightIdx--;
            count++;
          }
            
          leftIdx++;
        }

        return nums.size() - count;
    }
};