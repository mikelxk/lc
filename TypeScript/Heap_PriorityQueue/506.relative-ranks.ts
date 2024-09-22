import {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
  PriorityQueueOptions, // queue options interface
  PriorityQueueItem, // queue item interface for min/max queue
} from "@datastructures-js/priority-queue"
function findRelativeRanks(score: number[]): string[] {
  let scoreIdx: [number, number][] = score.map((v, i) => [v, i])
  let mpq = MaxPriorityQueue.from(scoreIdx)
  let ai = mpq.toArray().map((v,i)=>{
    return i
  })
  let res = []
  for(let i=0;i<score.length;++i){
    res.push(ai[])
  }
console.log(a)
  return a
}
findRelativeRanks([5,4,3,2,1])