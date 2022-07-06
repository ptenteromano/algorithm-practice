func maxDistance(nums1 []int, nums2 []int) int {
    dist := 0
    
    for idx, val := range nums1 {
        if idx >= len(nums2) {
            return dist
        }
        
        dist = max(dist, findPair(nums2[idx:], val))
    }
    
    return dist
}

// Binary search on the second array
// Must be <= the incoming idx, and 
// value <= val
// Slice the array
func findPair(arr []int, val int) int {
    low, high, distance := 0, len(arr) - 1, 0
    
    for low <= high {
        mid := (high + low) / 2
        
        if val > arr[mid] {
            high = mid - 1
        } else {
            low = mid + 1
            distance = max(distance, mid)
        }
    }
    
    return distance
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}