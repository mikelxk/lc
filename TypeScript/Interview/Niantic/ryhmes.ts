/**
 * A rhyme scheme is the pattern of rhymes at the end of each line of a poem or song. It is usually referred to by using letters to indicate which lines rhyme; lines designated with the same letter all rhyme with each other.

An example of the ABAB rhyming scheme, from "To Anthea, who may Command him Anything", by Robert Herrick:

Bid me to weep, and I will weep		A
While I have eyes to see		    B
And having none, yet I will keep	A
A heart to weep for thee		    B

Given a number n, where n denotes the number of lines, generate all possible rhyme schemes for a poem of length n.

n = 1
A

n = 2
AA
AB === BA === XY

n = 3
AAA
AAB
ABA
ABB
ABC

n = 4 // 15
ABCD

n = 5 // 52


 * 
 */
//1,2,3,15,52
function comb(n: number) {
  let alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
  ]

  let res = []

  function backtrack(index: number, curr: string[]) {
    if (index === n) {
      res.push(curr.join(""))
      return
    }
    let ns = new Set(curr)
    for (let i = 0; i < ns.size + 1; ++i) {
      curr.push(alpha[i])
      backtrack(index + 1, curr)
      curr.pop()
    }
  }
  backtrack(0, [])
  return res
}
comb(3)
// ["AA", "AB"]
