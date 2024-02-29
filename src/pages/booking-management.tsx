import { Button } from '@/components/ui/button'
import { BookingContext } from '@/contexts/booking-context'
import { ChevronLeft } from 'lucide-react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export default function BookingManagement() {
  const navigate = useNavigate()
  const { bookings } = useContext(BookingContext)

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <Button variant="outline" size="icon" onClick={() => navigate(-1)}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-md">
            <h1 className="text-gray-800 text-xl font-extrabold sm:text-2xl">
              Manage your bookings
            </h1>
            {/* <p className="text-gray-600 mt-2">
              Extend and automate your workflow by using integrations for your
              favorite tools.
            </p> */}
          </div>
          <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {bookings?.map(({ id, place, dates }) => (
              <li key={id} className="border rounded-lg">
                <div className="flex items-start justify-between p-4">
                  <div className="space-y-2">
                    <h4 className="text-gray-800 font-semibold">
                      {place?.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{place?.address}</p>
                  </div>
                </div>
                <div className="py-5 px-4 border-t text-right">
                  <a className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                    {`Check-in: ${dates?.from}`}
                    {`Check-out: ${dates?.to}`}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
