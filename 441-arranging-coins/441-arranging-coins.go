func arrangeCoins(n int) int {
    low, high := 0, n    
    
    for low <= high {
        k := (high + low) / 2
    
        // Find maximum K that satisfies: 
        curr := k * (k + 1) / 2
        
        if curr == n {
            return k
        }
           
        if n < curr {
            high = k - 1
        } else {
            low = k + 1
        }
    }
    
    return high
}

// Can also do:
// math.Sqrt(2 * n + 0.25) - 0.5;