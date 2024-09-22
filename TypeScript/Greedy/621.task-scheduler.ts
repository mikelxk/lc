
function leastInterval(tasks: string[], n: number): number {
  let freq = new Map<string, number>()
  let cooldownQueue: string[] = []
  for (let t of tasks) {
    freq.set(t, (freq.get(t) || 0) + 1)
  }
  let res = 0
  while (freq.size > 0) {
    let maxCnt = 0
    let maxOccur = ""
    console.log(freq,cooldownQueue)
    for (let [task, count] of freq.entries()) {
      if (count > maxCnt && !cooldownQueue.includes(task)) {
        maxCnt = count
        maxOccur = task
      }
    }
    ++res
    if(maxCnt ==0){
        cooldownQueue.push("")
    }
    if (maxCnt !== 0) {
      freq.set(maxOccur, maxCnt - 1)
        debugger
      if (freq.get(maxOccur) === 0) {
        freq.delete(maxOccur)
      }
      cooldownQueue.push(maxOccur)
    }
    if (cooldownQueue.length > n) {
      cooldownQueue.shift()
    }
  }
  return res
}
leastInterval(["A","A","A","B","B","B"],2)