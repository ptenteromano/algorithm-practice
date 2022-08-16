func largestPerimeter(nums []int) int {
    sort.Sort(sort.Reverse(sort.IntSlice(nums)))

    for idx := 0; idx < len(nums) - 2; idx++ {
        if nums[idx] < nums[idx + 1] + nums[idx + 2] {
            return nums[idx] + nums[idx + 1] + nums[idx + 2]
        }
    }
    
    return 0
}
