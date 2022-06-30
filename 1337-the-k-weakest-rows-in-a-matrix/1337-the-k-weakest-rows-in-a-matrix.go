func kWeakestRows(mat [][]int, k int) []int {
    weakest := []int{}
    checked := map[int]bool{}
    
    for col := 0; col < len(mat[0]); col++ {
        for row := 0; row < len(mat); row++ {
            person := mat[row][col]
            
            if person == 1 || checked[row] {
                continue
            }
            
            checked[row] = true
            weakest = append(weakest, row)
            
            if len(weakest) == k {
                return weakest
            }
        }
    }
    
    for row := 0; row < len(mat) && len(weakest) < k; row++ {
        if checked[row] {
            continue
        }
        weakest = append(weakest, row)
    }
    
    return weakest
}
