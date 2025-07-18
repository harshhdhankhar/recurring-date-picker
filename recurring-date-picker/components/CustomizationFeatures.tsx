import { useRecurrenceStore } from "../store/useRecurrenceStore";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function CustomizationFeatures() {
  const { recurrenceType, interval, setInterval, selectedWeekdays, setSelectedWeekdays, pattern, setPattern } = useRecurrenceStore();

  return (
    <div className="mb-6">
      <h2 className="font-semibold mb-2">Customization Features</h2>
      <div className="flex flex-col gap-4">
        <label>
          Every&nbsp;
          <input
            type="number"
            min={1}
            value={interval}
            onChange={(e) => setInterval(Number(e.target.value))}
            className="border px-2 py-1 rounded w-16"
            data-testid="interval-input"
          />
          &nbsp;{recurrenceType.toLowerCase()}(s)
        </label>

        {(recurrenceType === "Weekly" || recurrenceType === "Monthly" || recurrenceType === "Yearly") && (
          <div>
            <span>Select days of week:</span>
            <div className="flex gap-2 mt-2">
              {daysOfWeek.map((day, i) => (
                <button
                  key={day}
                  className={`px-2 py-1 rounded border ${selectedWeekdays.includes(i) ? "bg-blue-500 text-white" : "bg-white text-gray-800"}`}
                  onClick={() => {
                    setSelectedWeekdays(
                      selectedWeekdays.includes(i)
                        ? selectedWeekdays.filter((d) => d !== i)
                        : [...selectedWeekdays, i]
                    );
                  }}
                  data-testid={`weekday-option-${day.toLowerCase()}`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        )}

        {(recurrenceType === "Monthly" || recurrenceType === "Yearly") && (
          <label>
            Pattern (e.g., "Second Tuesday of every month"):
            <input
              type="text"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              className="border px-2 py-1 rounded w-full mt-2"
              placeholder="e.g. Second Tuesday of every month"
              data-testid="pattern-input"
            />
          </label>
        )}
      </div>
    </div>
  );
}