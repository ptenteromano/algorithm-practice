class Solution {
public:
    int mySqrt(int x) {
        if (x < 2) return x;
        
        int low = 2, high = x / 2;
        long long test, mid;
        
        while (low <= high) {
            mid = (high + low) / 2;
            test = mid * mid;
            
            if (test == x) return mid;
            
            if (test > x) 
                high = mid - 1;
            else 
                low = mid + 1;
            
        }
        
        return high;
    }
};