class MyCalendarTwo {
  map = new Map()

  book(start: number, end: number) {
    // Update the map with start and end events
    this.map.set(start, (this.map.get(start) || 0) + 1)
    this.map.set(end, (this.map.get(end) || 0) - 1)

    let ongoing = 0

    const sortedKeys = Array.from(this.map.keys()).sort((a, b) => a - b)

    for (let key of sortedKeys) {
      ongoing += this.map.get(key)
      if (ongoing >= 3) {
        this.map.set(start, (this.map.get(start) || 0) - 1)
        this.map.set(end, (this.map.get(end) || 0) + 1)
        return false
      }
    }
    return true
  }
}
let b = new MyCalendarTwo()
b.book(10, 20)
b.book(50, 60)
b.book(10, 40)
b.book(5, 15)
b.book(5, 10)
b.book(25, 55)
