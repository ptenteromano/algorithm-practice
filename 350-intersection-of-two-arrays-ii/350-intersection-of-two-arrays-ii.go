func intersect(nums1 []int, nums2 []int) []int {
    sort.Ints(nums1)
    sort.Ints(nums2)

    res := make([]int, 0, len(nums2))    
    oneIdx, twoIdx := 0, 0
    
    for oneIdx < len(nums1) && twoIdx < len(nums2) {
        if nums1[oneIdx] == nums2[twoIdx] {
            res = append(res, nums1[oneIdx]) 
            oneIdx++
            twoIdx++
        } else if nums1[oneIdx] > nums2[twoIdx] {
            twoIdx++
        } else {
            oneIdx++
        }
    }
    
    return res
}