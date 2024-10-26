function isNStraightHand(hand: number[], groupSize: number): boolean {
  let sortedCards = hand.sort((a, b) => a - b)
  let cnt = 0
  while (cnt < hand.length) {
    let curHand = []
    for (let i = 0; i < groupSize; ++i) {
      if (curHand.length == 0) {
        let idx = sortedCards.findIndex(n => n != -1)
        console.log(idx,sortedCards[idx],sortedCards)
        if (idx == -1) {
          return false
        }
        curHand.push(sortedCards[idx])
        sortedCards[idx] = -1
      } else {
        let handNum = curHand.at(-1) + 1
        let idx = sortedCards.findIndex(n => n == handNum)
        if (idx == -1) {
          return false
        }
        curHand.push(sortedCards[idx])
        sortedCards[idx] = -1
      }
      ++cnt
    }
  }
  console.log("x")
  return true
}
isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)
