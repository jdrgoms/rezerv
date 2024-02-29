import { z } from 'zod'
import { nanoid } from 'nanoid'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { bookingFormSchema } from '@/contexts/booking.type'

import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form'

import { places } from '@/utils'
import { SelectPlace } from '../select-place'
import { Button } from '../ui/button'

export default function BookingForm() {
  const form = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      id: '',
      placeId: '',
    },
  })

  function onSubmit(values: z.infer<typeof bookingFormSchema>) {
    const newBooking = {
      id: nanoid(),
      place: places.find(({ id }) => id === values.placeId),
    }

    console.log(newBooking)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <FormField
          control={form.control}
          name="placeId"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <SelectPlace value={value} onChange={onChange} />
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
