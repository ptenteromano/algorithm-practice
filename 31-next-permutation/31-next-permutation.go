// This was a question from Laurel Road,
// Except that it also required that the next Permutation be even
// This must be done "in place"
func nextPermutation(nums []int)  {
    // Last digit on the right
    prevDigit := nums[len(nums) - 1]
    performedSwap := false
    
    // Start from the second from the right, going right to left
    for idx := len(nums) - 2; idx >= 0; idx-- {
        currDigit := nums[idx]
        
        // Perform a swap with smallest difference
        // Then sort the remaining to the right
        if currDigit < prevDigit {
            swapCurrWithSmallest(nums[idx:])
            sort.Ints(nums[idx+1:])
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
    
    // Look for the smallest number that is larger than currDigit
    for idx, num := range nums[1:] {
        val := num - currDigit
        
        if val < diff && val > 0 {
            diff = num - currDigit
            swapIdx = idx + 1 // handle slice offset
        }
    }
    
    // Swap was possible, perform in-memory swap
    if swapIdx > 0 {
        nums[0], nums[swapIdx] = nums[swapIdx], nums[0]
    }
}