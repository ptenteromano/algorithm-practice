func canMakeArithmeticProgression(arr []int) bool {
    sort.Ints(arr)
    diff := arr[1] - arr[0]
    
    for idx := 1; idx < len(arr) - 1; idx++ {
        if arr[idx+1] - arr[idx] != diff {
            return false
        }
    }
    
    return true
}