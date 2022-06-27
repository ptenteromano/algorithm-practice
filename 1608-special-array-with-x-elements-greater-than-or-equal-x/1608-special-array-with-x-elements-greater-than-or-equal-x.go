func specialArray(nums []int) int {
    sort.Ints(nums)
    n := len(nums)
    
    // High is allowed to be 'n' here because mid is not used to index
    // This range is just the range of numbers, searching for SomeX
    low, high := 0, n
    
    for low <= high {
        someX := (high + low) / 2
        count := countSpecial(nums, someX)
        
        if count == someX {
            return someX
        } else if count < someX {
            high = someX - 1
        } else {
            low = someX + 1
        }
    }
    
    return -1
}

// Try to find the 'X' number as a Value in the sorted Array
// Return a count of the remaining values from the found value
func countSpecial(nums[] int, currX int) int {
    low, high, result := 0, len(nums) - 1, -1
    
    for low <= high {
        mid := (high + low) / 2
        
        if nums[mid] >= currX {
            result = max(result, len(nums) - mid)
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    
    return result
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}