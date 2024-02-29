import type { Booking } from '@/contexts/booking.type'

export const getStorage = (key: string): Booking[] | [] => {
  const storage = localStorage.getItem(key)

  if (storage) {
    return JSON.parse(storage) as Booking[]
  }

  return []
}

export const setStorage = (key: string, data: Booking[]) =>
  localStorage.setItem(key, JSON.stringify(data))

export const removeStorage = (key: string) => localStorage.removeItem(key)
