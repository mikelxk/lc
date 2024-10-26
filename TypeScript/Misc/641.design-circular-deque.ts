class MyCircularDeque {
  buffer: number[]
  cnt = 0
  k = 0
  front = 0
  rear = 0
  constructor(k: number) {
    this.buffer = new Array<number>(k)
    this.k = k
    this.front = k - 1
  }

  insertFront(value: number): boolean {
    if (this.isFull()) {
      return false
    }
    this.buffer[this.front] = value
    this.front = (this.front - 1 + this.k) % this.k
    ++this.cnt
    return true
  }

  insertLast(value: number): boolean {
    if (this.isFull()) {
      return false
    }
    this.buffer[this.rear] = value
    this.rear = (this.rear + 1) % this.k
    this.cnt++
    return true
  }

  deleteFront(): boolean {
    if (this.isEmpty()) {
      return false
    }
    this.front = (this.front + 1) % this.k
    --this.cnt
    return true
  }

  deleteLast(): boolean {
    if (this.isEmpty()) {
      return false
    }
    this.rear = (this.rear - 1 + this.k) % this.k
    --this.cnt
    return true
  }

  getFront(): number {
    if (this.isEmpty()) {
      return -1
    }
    return this.buffer[(this.front + 1) % this.k]
  }

  getRear(): number {
    if (this.isEmpty()) {
      return -1
    }
    return this.buffer[(this.rear - 1 + this.k) % this.k]
  }

  isEmpty(): boolean {
    return this.cnt == 0
  }

  isFull(): boolean {
    return this.k == this.cnt
  }
}
