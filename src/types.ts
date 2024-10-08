export interface Passenger {
  _id: number
  name: string
  trips: number
  airline: Airline[]
}
export interface Airline {
  _id: number
  name: string
  country: string
  logo: string
  slogan: string
  head_quaters: string
  website: string
  established: string
  _v: number
}
export interface MessageState {
  message: string
}
