function simplifyPath(path: string): string {
  let absolutePaths = path.split("/")
  let res: string[] = []
  for (let p of absolutePaths) {
    if (p == "") {
      continue
    }
    if (p == ".") {
    } else if (p == "..") {
      res.pop()
    } else {
      res.push(p)
    }
  }
  return "/" + res.join("/")
}
