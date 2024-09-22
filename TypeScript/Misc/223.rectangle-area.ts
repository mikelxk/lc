function computeArea(
  ax1: number,
  ay1: number,
  ax2: number,
  ay2: number,
  bx1: number,
  by1: number,
  bx2: number,
  by2: number
): number {
  function calcArea(x1: number, y1: number, x2: number, y2: number) {
    let length = Math.abs(y2 - y1)
    let width = Math.abs(x2 - x1)
    return length * width
  }
  let aArea = calcArea(ax1, ay1, ax2, ay2)
  let bArea = calcArea(bx1, by1, bx2, by2)
  console.log(aArea, bArea)
  return aArea + bArea - OverlapLength(ax1,ax2,bx1,bx2)*OverlapLength(ay1,ay2,by1,by2)
}
function OverlapLength(A, C, E, G) {
  if (C < E || A > G) return 0
  return Math.min(C, G) - Math.max(A, E)
}
