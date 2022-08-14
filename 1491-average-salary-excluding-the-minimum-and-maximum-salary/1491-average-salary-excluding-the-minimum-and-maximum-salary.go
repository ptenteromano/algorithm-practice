func average(salary []int) float64 {
    min, max, sum := salary[0], salary[0], 0
    
    for _, val := range salary {
        if val < min {
            min = val
        } 
        if val > max {
            max = val
        }

        sum += val
    }
    
    return float64(sum - min - max) / float64(len(salary) - 2)
}
