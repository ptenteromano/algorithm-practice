func climbStairs(n int) int {
    if n < 3 {
        return n
    }
    
    a, b := 1, 2
    
    // Count up to n, counting the steps possible
    for step := 3; step <= n; step++ {
        a, b = b, a + b
    }
    
    return b
}