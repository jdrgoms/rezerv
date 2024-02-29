export type Place = {
  id: string
  price: string
  description: string
  name: string
  address: string
  amenities: string[]
}

export const places: Place[] = [
  {
    id: 'ax9ETgafnCjq',
    price: '120.00',
    description: 'Cozy beachfront apartment with ocean views.',
    name: 'Ocean Breeze Apartment',
    address: '123 Main Street, Santa Monica, CA 90401, USA',
    amenities: ['Balcony', 'Swimming pool', 'Gym'],
  },
  {
    id: 'vDau4yC4aSyc',
    price: '250.00',
    description: 'Luxury hotel with spa and rooftop bar.',
    name: 'The Grand Hotel',
    address: '456 Market Street, San Francisco, CA 94103, USA',
    amenities: ['Spa', 'Fitness center', 'Rooftop bar', 'Business center'],
  },
]
