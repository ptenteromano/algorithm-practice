// Phil Tenteromano

// Bubble sort in descending order, keeping track of # of swaps 
#include <iostream>

using namespace std;

int main() {
    int n;
    cout << "Input array size, then elements" << endl;
    cin >> n;
    // vector<int> a(n);
    int a[n];
    for(int a_i = 0; a_i < n; a_i++){
    	cin >> a[a_i];
    }
    // Write Your Code Here
    int totalSwaps = 0;

    for(int i = 0; i < n; i++) {
        int singleTravSwaps = 0;
        int temp;

        for (int j = 0; j < n-1; j++) {
            if (a[j] > a[j+1]) {
                // swap
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
                singleTravSwaps++;
            }
        }
        totalSwaps += singleTravSwaps;

        if (singleTravSwaps == 0) {
            // done if no swaps were made on any single traversal
            break;
        }
    }
    // get size of cpp array
    int size = sizeof(a) / sizeof(*a);

    cout << "Array is sorted in "<< totalSwaps << " swaps." << endl;
    cout << "First Element: " << a[0] << endl;
    cout << "Last Element: "<< a[size-1] << endl;

    return 0;
}

