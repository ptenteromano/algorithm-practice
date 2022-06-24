func searchRange(nums []int, target int) []int {
    // Initial Search
    high := findTarget(nums, target)
    
    // Didn't find it, return early
    if high == -1 {
        return []int{-1, -1}
    }
    
    // Split the array and parse both sides
    // This is a good problem for concurrency, as each side is completely separate memory addresses
    bounds := make(chan int, 2)
    
    // Search lower half of array, in its own thread (goroutine)
    go func(low int) {
        for {
            temp := findTarget(nums[:low], target)
            if temp == -1 {
                break
            }
            low = temp
        } 
        bounds<-low
    }(high)
    
    
    // Search upper half of array, in its own thread (goroutine)
    go func(high int) {
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
        bounds<-high
    }(high)
    
    newLow := <-bounds
    newHigh := <-bounds
    
    if newLow > newHigh {
        newLow, newHigh = newHigh, newLow
    }
    
    return []int{newLow, newHigh}
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