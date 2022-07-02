func isValid(s string) bool {
    stack := []string{}
    
    for _, r := range s {
        char := string(r)
        
        if openBraces(char) {
            stack = append(stack, char)
            continue
        }
        
        if len(stack) == 0 {
            return false
        }
        
        pop := stack[len(stack) - 1]
        
        if !ensure(pop, char) {
            return false
        }
        
        stack = stack[:len(stack) - 1]
    }
    
    return len(stack) == 0
}

func openBraces(char string) bool {
    return char == "(" || char == "{" || char == "["
}

func ensure(pop, char string) bool {
    if (pop == "(" && char == ")") || 
    (pop == "{" && char == "}") ||
        (pop == "[" && char == "]") {
        return true
    }
    return false
}