function canArrange(arr: number[], k: number): boolean {
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length / 2; ++i) {
    let j = arr.length -1 - i
    if(arr[i]+arr[j]%k!=0){
        return false
    }
  }
  return true
}
