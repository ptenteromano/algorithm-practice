func arraySign(nums []int) int {
    res := 1
    
    for _, val := range nums {
        if val == 0 {
            return 0
        }
        
        if val < 0 && res < 0 {
            res = 1
        } else if val < 0 && res > 0 {
            res = -1
        }
    }
    
    return res
}