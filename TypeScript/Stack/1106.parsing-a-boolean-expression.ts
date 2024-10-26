function parseBoolExpr(expression: string): boolean {
  let st: string[] = []
  for (let c of expression) {
    if (c == ")") {
      let values: string[] = []
      while (st.at(-1) !== "(") {
        values.push(st.at(-1))
        st.pop()
      }
      st.pop()
      let op = st.pop()
      let res = ""
      if (op == "!") {
        res = values[0] == "t" ? "f" : "t"
      } else if (op === "&") {
        res = values.some(v => v == "f") ? "f" : "t"
      } else if (op == "|") {
        res = values.some(v => v == "t") ? "t" : "f"
      }
      st.push(res)
    } else if (c !== ",") {
      st.push(c)
    }
  }
  return st.at(-1) === "t"
}
console.log(parseBoolExpr("|(f,f,f,t)"))
