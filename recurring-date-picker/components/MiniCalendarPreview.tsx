import { useRecurrenceStore } from "../store/useRecurrenceStore";
import { getRecurringDates } from "../utils/getRecurringDates";

export function MiniCalendarPreview() {
  const { recurrenceType, interval, startDate, endDate, selectedWeekdays, pattern } = useRecurrenceStore();

  const dates = getRecurringDates({
    recurrenceType,
    interval,
    startDate,
    endDate,
    selectedWeekdays,
    pattern,
  });

  return (
    <div className="mb-6">
      <h2 className="font-semibold mb-2">Mini Calendar Preview</h2>
      <div className="grid grid-cols-7 gap-2">
        {dates.slice(0, 21).map((date, idx) => (
          <div key={date} className="border rounded px-2 py-1 text-center bg-blue-50" data-testid={`calendar-date-${idx}`}>
            {date}
          </div>
        ))}
      </div>
      <p className="mt-2 text-sm text-gray-600">Showing first 21 recurring dates</p>
    </div>
  );
}