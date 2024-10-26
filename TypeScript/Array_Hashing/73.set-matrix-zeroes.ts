function setZeroes(matrix: number[][]): void {
  let fr = false
  let fc = false
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0) {
        if (i == 0) fr = true
        if (j == 0) fc = true
        matrix[0][j] = 0
        matrix[i][0] = 0
      }
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0
      }
    }
  }
  if (fr) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[0][j] = 0
    }
  }
  if (fc) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0
    }
  }
}
setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])
