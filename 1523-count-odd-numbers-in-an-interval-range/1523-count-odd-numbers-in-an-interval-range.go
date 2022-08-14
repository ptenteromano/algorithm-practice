func countOdds(low int, high int) int {
    checkSum := high - low + 1
    
    // There are equal amounts odd and even numbers between
    if checkSum % 2 == 0 {
        return int(math.Ceil(float64(high - low) / 2.0))
    }
    
    // Both are odd
    if high % 2 == 1 {
        return (high - low) / 2 + 1
    }
    
    // Both are even
    return (high - low) / 2
}