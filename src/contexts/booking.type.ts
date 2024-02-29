import type { Dispatch, ReactNode, SetStateAction } from 'react'

export type Booking = {
  id: string
  checkIn: Date | null
  checkOut: Date | null
}

export type BookingContextObject = {
  bookings: Booking[]
  setBookings: Dispatch<SetStateAction<Booking[]>>
}

export type BookingProviderProps = {
  children: ReactNode
}
