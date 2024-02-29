import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { FormControl } from '../ui/form'
import { places } from '@/utils'

type SelectFieldProps = {
  value: string
  onChange: () => void
}

export default function SelectField({ value, onChange }: SelectFieldProps) {
  return (
    <Select onValueChange={onChange} defaultValue={value}>
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder="Choose a place" />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {places.map(({ id, name }) => (
          <SelectItem key={id} value={id}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
