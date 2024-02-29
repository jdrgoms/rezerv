import { z } from 'zod'
import { DateRange } from 'react-day-picker'
import type { Dispatch, ReactNode, SetStateAction } from 'react'
import { Place } from '@/utils'

export type Booking = {
  id: string
  place?: Place
  dates: DateRange | undefined
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
  dates: z.object({
    from: z.date().refine((val) => val !== null, {
      message: 'check-in date is required',
    }),
    to: z.date().refine((val) => val !== null, {
      message: 'check-out date is required',
    }),
  }),
})
