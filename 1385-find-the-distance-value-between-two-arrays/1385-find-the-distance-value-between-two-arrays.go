func findTheDistanceValue(arr1 []int, arr2 []int, d int) int {
    sort.Ints(arr2)
    count := len(arr1)
    
    for _, target := range arr1 {
        res := closest(&arr2, target)
        
        if res <= d {
            count--
        }
    }
    
    return count
}

// arr2 is sorted, target is a value in arr1
// return the smallest distance value
func closest(nums *[]int, target int) int {
    size := len(*nums)
    low, high, smallestGap := 0, size - 1, math.MaxInt32
    
    for low <= high {
        mid := (high + low) / 2
        
        if (*nums)[mid] == target {
            return 0
        }
        
        val := abs(target - (*nums)[mid])
        
        if val < smallestGap {
            smallestGap = val
        }
        
        if (*nums)[mid] < target {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    
    return smallestGap
}

func abs(val int) int {
    if val < 0 {
        return val * -1
    }
    return val
}

func idxCheck(idx int, size int) int {
    if idx < 0 {
        return 0
    }
    if idx > size - 1 {
        return size - 1
    }
    return idx
}