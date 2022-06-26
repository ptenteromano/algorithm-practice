func findKthPositive(arr []int, k int) int {
    low, high := 0, len(arr) - 1
    
    for low <= high { 
        idx := (high + low) / 2
        numMissing := arr[idx] - idx - 1
        
        if numMissing < k {
            low = idx + 1
        } else {
            high = idx - 1
        }
    }
    
    return low + k
}