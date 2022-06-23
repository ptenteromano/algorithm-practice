func mySqrt(x int) int {
    if x < 2 {
        return x
    }
    
    low, high := 2, x / 2
    
    for low <= high {
        mid := (high + low) / 2
        test := mid * mid
        
        if test == x {
            return mid
        }
        
        if test > x {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return high
}