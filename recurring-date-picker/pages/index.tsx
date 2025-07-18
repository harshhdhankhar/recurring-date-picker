import Head from "next/head";
import { RecurrenceOptions, CustomizationFeatures, DateRangePicker, MiniCalendarPreview } from "../components";
import { useRecurrenceStore } from "../store/useRecurrenceStore";

export default function Home() {
  const recurrenceState = useRecurrenceStore();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <Head>
        <title>Recurring Date Picker</title>
      </Head>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4 text-center">Recurring Date Picker Component Demo</h1>
        <RecurrenceOptions />
        <CustomizationFeatures />
        <DateRangePicker />
        <MiniCalendarPreview />
      </div>
    </div>
  );
}