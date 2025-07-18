import { useRecurrenceStore } from "../store/useRecurrenceStore";

const recurrenceOptions = ["Daily", "Weekly", "Monthly", "Yearly"];

export function RecurrenceOptions() {
  const { recurrenceType, setRecurrenceType } = useRecurrenceStore();

  return (
    <div className="mb-6">
      <h2 className="font-semibold mb-2">Recurring Options</h2>
      <div className="flex gap-4">
        {recurrenceOptions.map((option) => (
          <button
            key={option}
            className={`px-4 py-2 rounded border ${recurrenceType === option ? "bg-blue-500 text-white" : "bg-white text-gray-800"}`}
            onClick={() => setRecurrenceType(option)}
            data-testid={`recurrence-option-${option.toLowerCase()}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}