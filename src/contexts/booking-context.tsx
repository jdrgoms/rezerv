import { createContext, useEffect, useState } from 'react'
import type {
  BookingContextObject,
  BookingProviderProps,
  Booking,
} from './booking.type'
import { getStorage } from '@/utils'

export const BookingContext = createContext<BookingContextObject>({
  bookings: [],
  setBookings: () => {},
})

const BookingProvider = ({ children }: BookingProviderProps) => {
  const [bookings, setBookings] = useState<Booking[]>([])

  useEffect(() => {
    const storedBooking = getStorage('booking')

    setBookings(storedBooking)
  }, [])

  return (
    <BookingContext.Provider value={{ bookings, setBookings }}>
      {children}
    </BookingContext.Provider>
  )
}

export default BookingProvider
