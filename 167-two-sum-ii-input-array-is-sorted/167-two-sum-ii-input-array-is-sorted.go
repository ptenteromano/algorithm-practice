func twoSum(numbers []int, target int) []int {
    for idx, val := range numbers {
        diff := target - val 
        
        for {
            diffIdx := binarySearch(numbers[(idx + 1):], diff)
            if diffIdx == -1 {
                break
            }
            // Account for slice reindexing
            diffIdx += idx + 1
            
            if diffIdx > idx {
                return []int{idx + 1, diffIdx + 1}
            }
            return []int{diffIdx + 1, idx + 1}
        }
    }
    
    return []int{-1,-1}
}

func binarySearch(nums []int, target int) int {
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