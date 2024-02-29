import type { Booking } from '@/contexts/booking.type'

export const getStorage = (): Booking[] | [] => {
  const storage = localStorage.getItem('bookings')

  if (storage) {
    return JSON.parse(storage) as Booking[]
  }

  return []
}

export const setStorage = (data: Booking[]) =>
  localStorage.setItem('bookings', JSON.stringify(data))

export const removeStorage = () => localStorage.removeItem('bookings')
