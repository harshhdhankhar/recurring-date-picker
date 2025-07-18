import { render, fireEvent, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Integration: Recurring Date Picker", () => {
  it("renders all main components", () => {
    render(<Home />);
    expect(screen.getByText(/Recurring Options/i)).toBeInTheDocument();
    expect(screen.getByText(/Customization Features/i)).toBeInTheDocument();
    expect(screen.getByText(/Date Range/i)).toBeInTheDocument();
    expect(screen.getByText(/Mini Calendar Preview/i)).toBeInTheDocument();
  });

  it("shows recurring dates after setting start date", () => {
    render(<Home />);
    fireEvent.change(screen.getByTestId("start-date-input"), { target: { value: "2025-07-20" } });
    expect(screen.getByTestId("calendar-date-0")).toHaveTextContent("2025-07-20");
  });
});