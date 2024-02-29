import { z } from 'zod'
import { nanoid } from 'nanoid'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { bookingFormSchema } from '@/contexts/booking.type'

import { places } from '@/utils'
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form'

import { Button } from '../ui/button'
import { DateRangePicker, SelectPlace } from '..'

export default function BookingForm() {
  const form = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      id: '',
      placeId: '',
      dates: {
        from: undefined,
        to: undefined,
      },
    },
  })

  function onSubmit(values: z.infer<typeof bookingFormSchema>) {
    const newBooking = {
      id: nanoid(),
      place: places.find(({ id }) => id === values.placeId),
      dates: values.dates,
    }

    console.log(newBooking)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-2 sm:grid-cols-2 lg:grid-cols-6"
      >
        <FormField
          name="placeId"
          control={form.control}
          render={({ field: { value, onChange } }) => (
            <FormItem className="sm:col-span-2">
              <SelectPlace value={value} onChange={onChange} />
              <FormMessage className="text-left" />
            </FormItem>
          )}
        />

        <FormField
          name="dates"
          control={form.control}
          render={({ field: { value, onChange } }) => (
            <FormItem className="sm:col-span-3">
              <DateRangePicker value={value} onChange={onChange} />
              <FormMessage className="text-left" />
            </FormItem>
          )}
        />

        <div className="sm:col-span-1">
          <Button type="submit" className="uppercase">
            Book now
          </Button>
        </div>
      </form>
    </Form>
  )
}
