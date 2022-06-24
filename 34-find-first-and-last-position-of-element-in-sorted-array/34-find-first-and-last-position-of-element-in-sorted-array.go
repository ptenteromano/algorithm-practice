func searchRange(nums []int, target int) []int {
    // Initial Search
    high := findTarget(nums, target)
    
    if high == -1 {
        return []int{-1, -1}
    }
    
    // We found it, lets search left and right
    low := high
    
    // Search lower half of array
    for {
        temp := findTarget(nums[:low], target)
        if temp == -1 {
            break
        }
        low = temp
    }
    
    // Search upper half of array
    for {
        if len(nums[high + 1:]) == 0 {
            break
        }
        
        temp := findTarget(nums[high + 1:], target)
        if temp == -1 {
            break
        }
        high += temp + 1
    }
    
    return []int{low, high}
}

// Pass a slice in, binary search
func findTarget(nums []int, target int) int {
    low, high := 0, len(nums) - 1
    
    for low <= high {
        mid := (high + low) / 2
        
        if nums[mid] == target {
            return mid
        }
        
        if nums[mid] < target {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    
    return -1
}