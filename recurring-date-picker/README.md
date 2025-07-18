# Recurring Date Picker Component

A reusable React component for selecting recurring dates, as specified in the internship assignment.

## Tech Stack

- Next.js (React framework)
- Zustand (state management)
- Tailwind CSS (styling)
- date-fns (date logic)
- Jest + React Testing Library (testing)

## Features

- **Recurring Options:** Daily, Weekly, Monthly, Yearly
- **Customization:**  
  - Interval (every X days/weeks/months/years)  
  - Specific days of the week  
  - Pattern (e.g., "Second Tuesday of every month")
- **Date Range:** Select start and optional end date
- **Mini Calendar Preview:** Visual display of selected recurring dates

## Project Structure

```
/recurring-date-picker/
  ├── components/
  ├── store/
  ├── utils/
  ├── pages/
  ├── __tests__/
  ├── styles/
  ├── public/
```

## How to Run

1. **Clone and Install:**
    ```sh
    git clone <your-repo-url>
    cd recurring-date-picker
    npm install
    ```

2. **Start Dev Server:**
    ```sh
    npm run dev
    ```

3. **Run Tests:**
    ```sh
    npm test
    ```

## Submission

- **Public GitHub Repository:** Upload all code here.
- **Cloud IDE Demo:** Import into CodeSandbox or StackBlitz for live preview.
- **Loom Video:** Record a 5–10 min walkthrough, showing your face and explaining the code and UI.

## Notes

- Easily customize styles via Tailwind.
- Extend logic in `utils/getRecurringDates.ts` for advanced recurrence patterns.
- All core logic is split into small, testable components.

---

**Happy Coding!**