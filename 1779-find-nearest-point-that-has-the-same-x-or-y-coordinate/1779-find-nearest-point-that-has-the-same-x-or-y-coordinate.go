func nearestValidPoint(x int, y int, points [][]int) int {
    nearest := math.MaxInt
    nearestIdx := -1
    
    for idx, coords := range points {
        if (x != coords[0] && y != coords[1]) {
            continue
        }
        
        calcDist := manhattanDist(x, coords[0], y, coords[1])
        
        if calcDist < nearest {
            nearest = calcDist
            nearestIdx = idx
        }
    }
    
    return nearestIdx
}

func manhattanDist(x1, x2, y1, y2 int) int {
    return abs(x1, x2) + abs(y1, y2)
}

func abs(a, b int) int {
    if a - b < 0 {
        return (a - b) * -1
    }
    
    return a - b
}