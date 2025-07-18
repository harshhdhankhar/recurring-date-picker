import { addDays, addWeeks, addMonths, addYears, format, isAfter, isBefore, parseISO, eachDayOfInterval } from "date-fns";

interface GetRecurringDatesParams {
  recurrenceType: string;
  interval: number;
  startDate: string;
  endDate: string;
  selectedWeekdays: number[];
  pattern: string;
}

export function getRecurringDates({
  recurrenceType,
  interval,
  startDate,
  endDate,
  selectedWeekdays,
  pattern,
}: GetRecurringDatesParams): string[] {
  if (!startDate) return [];
  const start = parseISO(startDate);
  const end = endDate ? parseISO(endDate) : addYears(start, 1);

  let dates: Date[] = [];
  let current = start;

  // Basic recurrence
  while (!isAfter(current, end) && dates.length < 50) {
    switch (recurrenceType) {
      case "Daily":
        dates.push(current);
        current = addDays(current, interval);
        break;
      case "Weekly":
        if (selectedWeekdays.length === 0) {
          dates.push(current);
        } else {
          selectedWeekdays.forEach((weekday) => {
            const date = addDays(current, (weekday - current.getDay() + 7) % 7);
            if (isBefore(date, end) && !dates.some((d) => d.getTime() === date.getTime())) {
              dates.push(date);
            }
          });
        }
        current = addWeeks(current, interval);
        break;
      case "Monthly":
        dates.push(current);
        current = addMonths(current, interval);
        break;
      case "Yearly":
        dates.push(current);
        current = addYears(current, interval);
        break;
      default:
        dates.push(current);
        current = addDays(current, interval);
        break;
    }
  }

  dates = dates.filter((d) => !isAfter(d, end));

  // Sort and format
  return dates
    .sort((a, b) => a.getTime() - b.getTime())
    .map((date) => format(date, "yyyy-MM-dd"));
}