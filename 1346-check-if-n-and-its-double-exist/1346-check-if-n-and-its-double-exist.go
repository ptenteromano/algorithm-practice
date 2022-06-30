func checkIfExist(arr []int) bool {
    complements := map[int]bool{}
    
    for _, val := range arr {        
        if complements[val * 2] {
            return true
        }
        
        if val % 2 == 0 && complements[val / 2] {
            return true
        }
        
        complements[val] = true
    }
    
    return false
}