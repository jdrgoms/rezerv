import { useContext } from 'react'
import { getStorage, setStorage } from '@/utils'
import { BookingContext } from '@/contexts/booking-context'
import type { Booking } from '@/contexts/booking.type'

export default function useBooking() {
  const { setBookings } = useContext(BookingContext)

  const createBooking = (newBooking: Booking) => {
    try {
      const storedBooking = getStorage()
      const mergeBookings = [...storedBooking, newBooking]

      setBookings(mergeBookings)
      setStorage(mergeBookings)
    } catch (error) {
      console.error('Failed to save booking', error)
    }
  }

  return { createBooking }
}
