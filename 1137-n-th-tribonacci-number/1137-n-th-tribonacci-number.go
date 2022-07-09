func tribonacci(n int) int {
    if n < 2 {
		return n
	}

	tn, tn1, tn2 := 0, 1, 1

	for i := 3; i <= n; i++ {
		tn3 := tn + tn1 + tn2
		tn, tn1, tn2 = tn1, tn2, tn3
	}

    return tn2
}
    