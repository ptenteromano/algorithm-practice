func countNegatives(grid [][]int) int {
    // count, low, high := 0, 0, len(grid) - 1
    
    // Binary Search on a Row, if negative, count and remove entire column (+ ones beyond it)
    // Continue down rows, doing the same (but now ignore last idx from columns above)
//     for low <= high {
//         mid := (low + high) / 2
        
//         if 
//     }
    count, cutoff := 0, len(grid[0])
    
    for _, arr := range grid {
        cutoff = cutoffIdx(arr[:cutoff])
        count += len(grid[0]) - cutoff
    }
    return count
}

// BinarySearch on a row slice to find the cutoff
// Return -1 if no negative numbers were found
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