import { render, screen, fireEvent } from "@testing-library/react";
import { RecurrenceOptions } from "../components/RecurrenceOptions";
import { useRecurrenceStore } from "../store/useRecurrenceStore";
import { act } from "react-dom/test-utils";

describe("RecurrenceOptions", () => {
  it("renders all recurrence options", () => {
    render(<RecurrenceOptions />);
    expect(screen.getByTestId("recurrence-option-daily")).toBeInTheDocument();
    expect(screen.getByTestId("recurrence-option-weekly")).toBeInTheDocument();
    expect(screen.getByTestId("recurrence-option-monthly")).toBeInTheDocument();
    expect(screen.getByTestId("recurrence-option-yearly")).toBeInTheDocument();
  });

  it("updates recurrence type on click", () => {
    render(<RecurrenceOptions />);
    act(() => {
      fireEvent.click(screen.getByTestId("recurrence-option-weekly"));
    });
    expect(useRecurrenceStore.getState().recurrenceType).toBe("Weekly");
  });
});