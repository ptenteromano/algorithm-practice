// This was a question from Laurel Road,
// Except that it also required that the next Permutation be even
// This must be done "in place"
func nextPermutation(nums []int)  {
    // Last digit
    prevDigit := nums[len(nums) - 1]
    performedSwap := false
    
    // Start from the second from the right, going right to left
    for idx := len(nums) - 2; idx >= 0; idx-- {
        currDigit := nums[idx]
        
        // Start to perform a swap
        if currDigit < prevDigit {
            swapCurrWithSmallest(nums[idx:])
            sortBeforeSwapIdx(nums[idx+1:])
            performedSwap = true
            break
        }
        
        prevDigit = currDigit
    }
    
    if !performedSwap {
        sort.Ints(nums)
    }
}

// Only give it a slice
func swapCurrWithSmallest(nums []int) {
    currDigit := nums[0]
    diff := math.MaxInt64
    swapIdx := -1
    
    for idx, num := range nums[1:] {
        fmt.Println("DIFF", diff, num, currDigit, idx)
        val := num - currDigit
        
        if val < diff && val > 0 {
            diff = num - currDigit
            swapIdx = idx + 1 // handle slice offset
        }
    }
    
    if swapIdx < 0 {
        return
    }
    
    fmt.Println("nums Inside1", nums, swapIdx, diff)
    nums[0], nums[swapIdx] = nums[swapIdx], nums[0]
    fmt.Println("nums Inside", nums)
}

// Only give it a slice
func sortBeforeSwapIdx(nums []int) {
    sort.Ints(nums)
}