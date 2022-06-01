class Solution {
public:
    char nextGreatestLetter(vector<char>& letters, char target) {
        const int len = letters.size() - 1;
        int low = 0, high = len, mid;
        
        while (low <= high) {
            mid = ceil((high + low) / 2.0);
            
            if (letters[mid] > target) 
                high = mid - 1;
            else
                low = mid + 1;
        }
        
        return letters[low % (len + 1)];
    }
};