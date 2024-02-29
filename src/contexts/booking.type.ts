import { z } from 'zod'
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

export const bookingFormSchema = z.object({
  id: z.string(),
  placeId: z.string().min(1, 'please choose the place'),
})
