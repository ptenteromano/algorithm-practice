func nextGreatestLetter(letters []byte, target byte) byte {
    low, high := 0, len(letters) - 1
    
    for low <= high {
        mid := (high + low) / 2
        
        if target < letters[mid] {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return letters[low % len(letters)]
}