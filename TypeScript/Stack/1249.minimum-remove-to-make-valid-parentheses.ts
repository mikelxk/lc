function minRemoveToMakeValid(s: string): string {
  let chars = s.split("")
  let stack = []
  for (let i = 0; i < chars.length; ++i) {
    if (chars[i] === "(") {
      stack.push(i)
    } else if (chars[i] === ")") {
      if (stack.length) {
        stack.pop()
      } else {
        chars[i] = ""
      }
    }
  }
  while (stack.length) {
    chars[stack.pop()] = ""
  }
  return chars.join("")
}
