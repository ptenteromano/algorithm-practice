func interpret(command string) string {
    idx := 0
    result, nextString := "", ""
    
    for idx < len(command){
        nextString, idx = parse(command, idx)
        result += nextString
    }
    
    return result
}

func parse(command string, idx int) (string, int) {
    char := string(command[idx])

    if char == "G" {
        return "G", idx + 1
    }
    
    if command[idx:idx+2] == "()" {
        return "o", idx + 2
    }   
    
    if command[idx:idx+4] == "(al)" {
        return "al", idx + 4
    }
    
    return "", len(command)
}