func maximumWealth(accounts [][]int) int {
    max := -1
    
    for _, moneyAccts := range accounts {
        totalValue := sumAccts(moneyAccts)
        
        if totalValue > max {
            max = totalValue
        }
    }
    
    return max
}

func sumAccts(moneyAccts []int) int {
    sum := 0
    
    for _, money := range moneyAccts {
        sum += money
    }
    
    return sum
}