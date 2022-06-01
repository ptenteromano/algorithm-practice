class Solution {
public:
    int findTheDistanceValue(vector<int>& arr1, vector<int>& arr2, int d) {
        int count = arr1.size(), absValue;
        cout << d << '\n';
        for (int i = 0; i < arr1.size(); i++) {
            for (int j = 0; j < arr2.size(); j++) {
                absValue = abs(arr1[i] - arr2[j]);
                cout << "abs: " << absValue << '\n';
                
                if (absValue <= d) {
                    count--;
                    break;
                }
                
            }
            
            cout << "------\n";
        }
        
        cout << "DONE\n";
        return count;
    }
};