func searchMatrix(matrix [][]int, target int) bool {
    rowIdx := searchColumnForRowIdx(matrix, target)
    
    // -2 is found, -1 means the previous row the element would be in does not exist
    if rowIdx < 0 {
        return rowIdx == -2
    }
    
    return binSearchRow(matrix[rowIdx], target)
}

// BinSearch on the entire first column to find which row the element is in
func searchColumnForRowIdx(matrix [][]int, target int) int {
    low, high := 0, len(matrix) - 1
    
    for low <= high {
        mid := (high + low) / 2
    
        // Sentinel value, meaning the target is found
        if matrix[mid][0] == target {
            return -2
        }
        
        if matrix[mid][0] < target {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    
    return high
}

// BinarySearch on the row
func binSearchRow(row []int, target int) bool {
    low, high := 0, len(row) - 1
    
    for low <= high {
        mid := (high + low) / 2
        
        if row[mid] == target {
            return true
        }
        
        if row[mid] < target {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    
    return false
}