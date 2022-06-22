func peakIndexInMountainArray(arr []int) int {
    low, high := 0, len(arr) - 1
    
    for low <= high {
        mid := (high + low) / 2
        
        if arr[max(0, mid - 1)] >  arr[mid] {
            high = mid - 1
        } else if arr[min(len(arr) - 1, mid + 1)] > arr[mid] {
            low = mid + 1
        } else {
            return mid
        }
    }
       
    return -1
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}