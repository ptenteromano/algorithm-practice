func maximumWealth(accounts [][]int) int {
    wealth := []int{}
    
    for _, moneyAccts := range accounts {
        wealth = append(wealth, sumAccts(moneyAccts))
    }
    
    return maxWealth(wealth)
}

func sumAccts(moneyAccts []int) int {
    sum := 0
    
    for _, money := range moneyAccts {
        sum += money
    }
    
    return sum
}

func maxWealth(wealth []int) int {
    max := -1
    
    for _, sum := range wealth {
        if sum > max {
            max = sum
        }
    }
    
    return max
} 