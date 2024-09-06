import { startOfDay as dateFnsStartOfDay } from 'date-fns'

export function startOfDay(date: Date | string | number): Date {
  return dateFnsStartOfDay(new Date(date))

}
