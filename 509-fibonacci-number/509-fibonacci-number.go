func fib(n int) int {
    return memo(callableFib)(n)
}

type heavyStackFn func(int) int

// Actual Fib
func callableFib(n int) int {
    if n < 2 {
        return n
    }
    
    return callableFib(n - 1) + callableFib(n - 2)
}

// Wrapper to memoize a heavyStackFn with a map
func memo(fn heavyStackFn) heavyStackFn {
    cache := map[int]int{}
    
    return func(n int) int {
        if val, ok := cache[n]; ok {
            return val
        }
        
        result := fn(n)
        cache[n] = result
        
        return result
    }
}