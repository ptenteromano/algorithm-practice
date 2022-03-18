// Using stack + dictionary
export const matchingBrackets = (str) => {
  const stack = [];
  const nests = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);

    if (char === "(" || char === "{" || char === "[") stack.push(char);
    else if (char === ")" || char === "}" || char === "]") {
      let frontBracket = stack.pop();
      if (nests[frontBracket] !== char) return false;
    }
  }
  return stack.length === 0;
};
