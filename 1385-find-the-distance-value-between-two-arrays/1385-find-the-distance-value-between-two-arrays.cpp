class Solution {
public:
    int findTheDistanceValue(vector<int>& arr1, vector<int>& arr2, int d) {
        int count = arr1.size(), absValue, j;
        sort(arr2.begin(), arr2.end());

        for (int i = 0; i < arr1.size(); i++) {
            j = closestIdx(arr2, arr1[i]);
            absValue = abs(arr1[i] - arr2[j]);
            
            if (absValue <= d) 
                count--;
        }
        return count;
    }

private:
    // Binary Search for closest value to target, return idx;
    int closestIdx(vector<int>&arr2, int target) {
        int low = 0, high = arr2.size() - 1, mid;
        int followClose = INT_MAX, absValue, closest;
        
        while (low <= high) {
            mid = ceil((high + low) / 2.0);
            
            if (arr2[mid] == target) return mid;
            
            absValue = abs(arr2[mid] - target);
            if (absValue < followClose) {
                followClose = absValue;
                closest = mid;
            }
            
            if (arr2[mid] < target) 
                low = mid + 1;
            else 
                high = mid - 1;
        }
        
        return closest;
    }
};