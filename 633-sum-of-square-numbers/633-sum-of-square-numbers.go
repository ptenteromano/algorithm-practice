func judgeSquareSum(c int) bool {
    // Re-written as:
    // b = c - a^2
    // Try to find integer b where a^2 <= c
    for a := 0; a * a <= c; a++ {
        b := c - a * a
        if foundSquareRoot(b) {
            return true
        }
    } 
    
    return false
}

// Given a and c, try to find integer square root of b^2
func foundSquareRoot(b int) bool {
    low, high := 0, b
    
    for low <= high {
        mid := (high + low) / 2
        val := mid * mid
        
        if val == b {
            return true
        }
        
        if val < b {
            low = mid + 1
        } else {
            high = mid -1
        }
    }
    
    return false
}