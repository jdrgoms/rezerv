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
  {
    id: 'GH5P86BfuFen',
    price: '180.00',
    description: 'Historic lodge with stunning mountain views.',
    name: 'Yellowstone National Park Lodge',
    address: 'Yellowstone National Park, WY 82190, USA',
    amenities: ['Hiking trails', 'Fishing', 'Gift shop', 'Restaurant'],
  },
  {
    id: 'MHmdQ6dAtjH8',
    price: '150.00',
    description: 'Modern apartment in vibrant downtown area.',
    name: 'City Lights Apartments',
    address: '789 Elm Street, Austin, TX 78701, USA',
    amenities: ['Balcony', 'Fitness center', 'Rooftop deck', 'Pet-friendly'],
  },
  {
    id: 'c3UKXy86T7HU',
    price: '200.00',
    description: 'Charming cottage near French Quarter.',
    name: 'Bourbon Street Guest House',
    address: '123 Royal Street, New Orleans, LA 70116, USA',
    amenities: ['Patio', 'Cable TV', 'Wi-Fi', 'Off-street parking'],
  },
  {
    id: 'Nbgce6t6QFDZ',
    price: '110.00',
    description: 'Rustic cabin perfect for a relaxing getaway.',
    name: 'Lake Tahoe Cabin Rentals',
    address: '100 Lakeside Drive, South Lake Tahoe, CA 96150, USA',
    amenities: ['Fireplace', 'Hot tub', 'Kayaks', 'Fishing'],
  },
  {
    id: '7902hkjxWmp0',
    price: '300.00',
    description: 'Luxury hotel overlooking Times Square.',
    name: 'The Cosmopolitan Hotel',
    address: '1 Broadway, New York, NY 10007, USA',
    amenities: [
      'Spa',
      'Fitness center',
      'Rooftop restaurant',
      'Concierge service',
    ],
  },
  {
    id: 'BBMWs9P10hAn',
    price: '140.00',
    description: 'Family-friendly hotel steps from the beach.',
    name: 'Oceanfront Family Resort',
    address: '456 Beach Boulevard, Miami, FL 33139, USA',
    amenities: ['Swimming pools', 'Water slides', 'Kids club', 'Game room'],
  },
  {
    id: 'DtGuYnwQHF0d',
    price: '90.00',
    description: 'Hostel with a social atmosphere and shared kitchen.',
    name: 'Wanderlust Hostel',
    address: '789 Main Street, Denver, CO 80202, USA',
    amenities: [
      'Shared kitchen',
      'Common room',
      'Laundry facilities',
      'Free Wi-Fi',
    ],
  },
  {
    id: 'SarDHH6QBXMQ',
    price: '175.00',
    description: 'Modern apartment in historic district.',
    name: 'The Beacon on Broad',
    address: '1234 Broad Street, Charleston, SC 29401, USA',
    amenities: [
      'Fitness center',
      'Rooftop terrace',
      'Parking garage',
      'Pet-friendly',
    ],
  },
]
