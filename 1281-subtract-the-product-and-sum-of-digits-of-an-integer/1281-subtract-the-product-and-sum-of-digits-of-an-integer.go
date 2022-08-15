func subtractProductAndSum(n int) int {
    prod := 1
    sum := 0
    
    for n > 0 {
        leastSignif := n % 10
        prod *= leastSignif
        sum += leastSignif
        
        n /= 10
    }
    
    return prod - sum
}