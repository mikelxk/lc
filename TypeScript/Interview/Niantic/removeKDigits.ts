function removeKdigitsBacktrack(num: string, k: number): string {
  let res = Number(num)
  backtrack(num, k)
  return res.toString()

  function backtrack(curr: string, limit: number) {
    if (limit == 0) {
      let curNum = Number(curr)
      console.log(curNum)
      res = Math.min(curNum, res)
    }

    for (let i = 0; i < curr.length; ++i) {
      let newCurNum = curr.substring(0, i) + curr.substring(i + 1)
      backtrack(newCurNum, limit - 1)
    }
  }
}
function removeKdigits(num: string, k: number): string {
    
};
removeKdigitsBacktrack("1432219", 3)
