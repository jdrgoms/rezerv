import { BookingForm } from '@/components/booking-form'

export default function Home() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mt-7 mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#2d2aa5] md:text-5xl lg:text-6xl dark:text-white">
          Find your place to stay
        </h1>
        <p className="my-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          The best of booking appointments is now Rezerv — offering homes,
          apartments, with the highest standard of service.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <BookingForm />
        </div>
      </div>
    </section>
  )
}
