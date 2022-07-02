func isPalindrome(x int) bool {
    if x < 0 || (x != 0 && x % 10 == 0) {
        return false
    }
    
    num := 0
    
    for x > num {
        num = num * 10 + x % 10
        x /= 10
        fmt.Println(num, x)
    }
    
    return num == x || num / 10 == x
}