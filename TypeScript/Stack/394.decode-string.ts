function decodeString(s: string): string {
  let curStr = ""
  let stack = []
  let curNum = 0
  for (let c of s) {
    if (c == "[") {
      stack.push([curStr, curNum])
      curNum = 0
      curStr = ""
    } else if (c == "]") {
      let [prevStr, preNum] = stack.pop()
      curStr = prevStr + curStr.repeat(preNum)
    } else if (!Number.isNaN(Number(c))) {
      curNum = curNum * 10 + Number(c)
    } else {
      curStr += c
    }
  }

  return curStr
}
