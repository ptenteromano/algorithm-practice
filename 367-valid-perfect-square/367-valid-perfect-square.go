func isPerfectSquare(num int) bool {
    if num == 1 {
        return true
    }
    
    low, high := 2, num / 2
    
    for low <= high {
        mid := (high + low) / 2
        div := num / mid 
        
        if div == mid {
            return num % mid == 0
        }
        
        if mid > div {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    
    return false
}