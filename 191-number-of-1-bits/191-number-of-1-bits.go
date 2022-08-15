func hammingWeight(num uint32) int {
    var mask uint32 = 1
    bits := 0
    
    for i := 0; i < 32; i ++ {
        if (num & mask != 0) {
            bits++
        }
        mask <<= 1;
    }
    
    return bits
}