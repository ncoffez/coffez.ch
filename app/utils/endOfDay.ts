import { endOfDay as dateFnsEndOfDay } from 'date-fns'

export function endOfDay(date: Date | string | number): Date {
  return dateFnsEndOfDay(new Date(date))

}
