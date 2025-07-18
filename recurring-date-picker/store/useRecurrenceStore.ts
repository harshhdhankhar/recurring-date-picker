import { create } from "zustand";

interface RecurrenceState {
  recurrenceType: string;
  interval: number;
  selectedWeekdays: number[];
  pattern: string;
  startDate: string;
  endDate: string;
  setRecurrenceType: (type: string) => void;
  setInterval: (interval: number) => void;
  setSelectedWeekdays: (days: number[]) => void;
  setPattern: (pattern: string) => void;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
}

export const useRecurrenceStore = create<RecurrenceState>((set) => ({
  recurrenceType: "Daily",
  interval: 1,
  selectedWeekdays: [],
  pattern: "",
  startDate: "",
  endDate: "",
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setInterval: (interval) => set({ interval }),
  setSelectedWeekdays: (days) => set({ selectedWeekdays: days }),
  setPattern: (pattern) => set({ pattern }),
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
}));