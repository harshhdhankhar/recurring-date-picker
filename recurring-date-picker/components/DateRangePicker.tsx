import { useRecurrenceStore } from "../store/useRecurrenceStore";

export function DateRangePicker() {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurrenceStore();

  return (
    <div className="mb-6">
      <h2 className="font-semibold mb-2">Date Range</h2>
      <div className="flex gap-4">
        <label>
          Start Date:&nbsp;
          <input
            type="date"
            value={startDate ? startDate : ""}
            onChange={(e) => setStartDate(e.target.value)}
            className="border px-2 py-1 rounded"
            data-testid="start-date-input"
          />
        </label>
        <label>
          End Date:&nbsp;
          <input
            type="date"
            value={endDate ? endDate : ""}
            onChange={(e) => setEndDate(e.target.value)}
            className="border px-2 py-1 rounded"
            data-testid="end-date-input"
          />
        </label>
      </div>
    </div>
  );
}