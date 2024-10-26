class HitCounter {
  queue = new Array<number>()

  hit(timestamp: number): void {
    this.queue.push(timestamp)
  }

  getHits(timestamp: number): number {
    while (this.queue.length && timestamp - this.queue[0] > 300) {
      this.queue.shift()
    }
    return this.queue.length
  }
}
