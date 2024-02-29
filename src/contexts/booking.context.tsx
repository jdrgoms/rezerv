import { createContext, useState } from 'react'
import type {
  BookingContextObject,
  BookingProviderProps,
  Booking,
} from './booking.type'

export const BookingContext = createContext<BookingContextObject>({
  bookings: [],
  setBookings: () => {},
})

const BookingProvider = ({ children }: BookingProviderProps) => {
  const [bookings, setBookings] = useState<Booking[]>([])

  return (
    <BookingContext.Provider value={{ bookings, setBookings }}>
      {children}
    </BookingContext.Provider>
  )
}

export default BookingProvider
