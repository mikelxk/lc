import { MaxPriorityQueue } from "@datastructures-js/priority-queue"
function topKFrequent(words: string[], k: number): string[] {
  let countMap = new Map<string, number>()
  let res = []

  // Count the frequency of each word
  for (let word of words) {
    countMap.set(word, (countMap.get(word) || 0) + 1)
  }

  return Array.from(countMap.entries())
		.sort((a, b) => {
			const res = b[1] - a[1];
			return res !== 0 ? res : a[0].localeCompare(b[0]);
		})
		.slice(0, k)
		.map(([w]) => w);
}
topKFrequent(["i","love","leetcode","i","love","coding"],2)