type Station = string
type Route = string
type time = number
type ID = number
type tripCount = number
type tripTime = number
class UndergroundSystem {
  checkInData = new Map<ID, [Station, time]>()
  journeyData = new Map<Route, [tripTime, tripCount]>()
  checkIn(id: number, stationName: string, t: number): void {
    this.checkInData.set(id, [stationName, t])
  }
  checkOut(id: number, stationName: string, t: number): void {
    let [startStation, checkInTime] = this.checkInData.get(id)
    let routeKey = this.getRouteKey(startStation, stationName)
    let [totalTripTime, totalTrips] = this.journeyData.get(routeKey) || [0, 0]
    let tripTime = t - checkInTime
    this.journeyData.set(routeKey, [totalTripTime + tripTime, totalTrips + 1])
    this.checkInData.delete(id)
  }
  getAverageTime(startStation: string, endStation: string): number {
    let routeKey = this.getRouteKey(startStation, endStation)
    let [totalTripTime, totalTrips] = this.journeyData.get(routeKey)
    return totalTripTime / totalTrips
  }
  getRouteKey(start: string, dest: string): Route {
    return `${start}->${dest}`
  }
}
