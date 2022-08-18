func areAlmostEqual(s1 string, s2 string) bool {
    if len(s1) != len(s2) {
        return false
    }
    
    count := 0
    swaps := make([]byte, 0, 2)
    
    for idx, s1Char := range []byte(s1) {
        s2Char := s2[idx]
        
        if s1Char == s2Char {
            continue
        }
        
        count++
        
        if count > 2 {
            return false
        }

        if count == 1 {
            swaps = append(swaps, s1Char, s2Char)
        } else if s1Char != swaps[1] || s2Char != swaps[0] {
            return false
        }
    }
    
    return count == 0 || count == 2
}