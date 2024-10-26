class MyCalendar {
  bookings = new Map<number, number>()

  book(start: number, end: number): boolean {
    for (let [bs, be] of this.bookings.entries()) {
      if (end > bs && start < be) {
        return false
      }
    }
    this.bookings.set(start, end)
  }
}
