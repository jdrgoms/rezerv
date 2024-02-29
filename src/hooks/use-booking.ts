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

  const updateBooking = (updatedBooking: Booking) => {
    try {
      const storedBookings = getStorage()
      const filteredBookings = storedBookings.map((booking) =>
        booking.id === updatedBooking.id ? updatedBooking : booking,
      )

      setBookings(filteredBookings)
      setStorage(filteredBookings)
    } catch (error) {
      console.error('Failed to update booking', error)
    }
  }

  const deleteBooking = (bookingId: string) => {
    console.log(bookingId)

    try {
      const storedBooking = getStorage()
      const filteredBookings = storedBooking.filter(
        ({ id }) => id !== bookingId,
      )

      setBookings(filteredBookings)
      setStorage(filteredBookings)
    } catch (err) {
      console.error('Failed to remove booking:', err)
    }
  }

  return { createBooking, updateBooking, deleteBooking }
}
