func nextGreaterElement(nums1 []int, nums2 []int) []int {
    result := []int{}
    
    for idx, valOne := range nums1 {
        found := false
        
        for _, valTwo := range nums2 {
            if !found && valTwo != valOne {
                continue
            }
            
            found = true

            if valTwo > valOne {
                result = append(result, valTwo)
                break
            }
        }
        
        if idx == len(result) {
            result = append(result, -1)
        }
    }
    
    return result
}