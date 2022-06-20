/** 
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * func guess(num int) int;
 */

// n is the maximum number the guess could be
func guessNumber(n int) int {
    low, high := 0, n
    
    for low <= high {
        mid := (high + low) / 2
        pick := guess(mid)
        
        if pick == 0 {
            return mid
        }
        
        if pick == -1 {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    
    return -1
}