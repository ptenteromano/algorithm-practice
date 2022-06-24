/** 
 * Forward declaration of isBadVersion API.
 * @param   version   your guess about first bad version
 * @return 	 	      true if current version is bad 
 *			          false if current version is good
 * func isBadVersion(version int) bool;
 */

func firstBadVersion(n int) int {
    low, high := 0, n
    
    for low <= high {
        mid := (high + low) / 2
        isBad := isBadVersion(mid)
        
        if isBad && mid <= 1 {
            return mid
        }
        
        if !isBad {
            low = mid + 1
            continue
        }
        
        prevIsBad := isBadVersion(mid - 1) 
        
        if isBad && prevIsBad {
            high = mid - 1
            continue
        }
        
        return mid
    }
    
    return -1
}