func countNegatives(grid [][]int) int {
    count, cutoff := 0, len(grid[0])
    
    for _, arr := range grid {
        if cutoff > 0 {
            cutoff = cutoffIdx(arr[:cutoff])    
        }
        count += len(grid[0]) - cutoff
    }
    return count
}

// BinarySearch on a row slice to find the cutoff
func cutoffIdx(arr []int) int {
    low, high := 0, len(arr) - 1
    smallestIdx := len(arr)
    
    for low <= high {
        mid := (high + low) / 2
        
        // Select smallest index
        if arr[mid] < 0 {
            smallestIdx = min(mid, smallestIdx)
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return smallestIdx
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}