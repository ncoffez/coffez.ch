import { differenceInDays, formatRelative, intlFormatDistance } from "date-fns";
import { de } from 'date-fns/locale'

export function relativeDate(date: Date, now: Date = new Date()): string {
  const difference: number = differenceInDays(date, now)
  if (difference >= -2) return intlFormatDistance(date, now);
  if (difference <= -7) return formatRelative(date, now, { locale: { ...de } })
  return formatRelative(date, now)
}  