func twoSum(nums []int, target int) []int {
    complements := map[int]int{}
    
    for idx, value := range nums {
        diff := target - value
        
        if compIdx, hasKey := complements[value]; hasKey {
            return []int{idx,compIdx}
        }
        
        complements[diff] = idx
    }
    
    return []int{-1,-1}
}