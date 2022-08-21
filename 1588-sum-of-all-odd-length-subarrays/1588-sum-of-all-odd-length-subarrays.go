func sumOddLengthSubarrays(arr []int) int {
    sum := 0
    
    for idxOne := 0; idxOne < len(arr); idxOne++ {
        for idxTwo := idxOne; idxTwo < len(arr); idxTwo++ {
            if (idxOne + idxTwo) % 2 == 0 {
                sum += sumArr(arr[idxOne:idxTwo+1])
            }
        }
    }
    
    return sum
}

func sumArr(arr []int) int {
    sum := 0
    
    for _, val := range arr {
        sum += val
    }
    
    return sum
}