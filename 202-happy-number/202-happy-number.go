func isHappy(n int) bool { 
    cycleMap := map[int]bool{}
    
    for n != 1 && !cycleMap[n] {
        cycleMap[n] = true
        n = sumSquareDigits(n)
    }
    return n == 1
}

func sumSquareDigits(n int) int {
    result := 0
    
    for n > 0 {
        digit := n % 10
        result += digit * digit 
        n /= 10
    }
    
    return result
}