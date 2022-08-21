func checkStraightLine(coordinates [][]int) bool {
    previous := slope(coordinates[0], coordinates[1])
 
    for idx := 2; idx < len(coordinates); idx++ {
        currSlope := slope(coordinates[idx - 1], coordinates[idx])
        if currSlope != previous {
            return false
        }
    }
    return true
}

func slope(coordsA, coordsB []int) float64 {
    divisor := float64(coordsB[0] - coordsA[0])
    if divisor == 0 {
        return math.Inf(1)
    }
    return float64(coordsB[1] - coordsA[1]) / divisor
}