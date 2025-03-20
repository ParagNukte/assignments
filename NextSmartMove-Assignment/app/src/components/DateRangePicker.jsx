import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import { styled } from "@mui/material";

// Define the shortcut items
const shortcutsItems = [
  {
    label: "This Week",
    getValue: () => {
      const today = dayjs();
      return [today.startOf("week"), today.endOf("week")];
    },
  },
  {
    label: "Last Week",
    getValue: () => {
      const today = dayjs();
      const prevWeek = today.subtract(7, "day");
      return [prevWeek.startOf("week"), prevWeek.endOf("week")];
    },
  },
  {
    label: "Last 7 Days",
    getValue: () => {
      const today = dayjs();
      return [today.subtract(7, "day"), today];
    },
  },
  {
    label: "Current Month",
    getValue: () => {
      const today = dayjs();
      return [today.startOf("month"), today.endOf("month")];
    },
  },
  {
    label: "Next Month",
    getValue: () => {
      const today = dayjs();
      const startOfNextMonth = today.endOf("month").add(1, "day");
      return [startOfNextMonth, startOfNextMonth.endOf("month")];
    },
  },
  { label: "Reset", getValue: () => [null, null] },
];

const StyledCalendarWrapper = styled("div")({
  ".MuiDayCalendar-root": {
    maxHeight: "unset",
  },

  ".MuiDayCalendar-weekDayLabel": {
    margin: 0,
    padding: "2px",
    height: "24px",
    width: "34px",

    "&:nth-of-type(1)::after": { content: '"un"' },
    "&:nth-of-type(2)::after": { content: '"on"' },
    "&:nth-of-type(3)::after": { content: '"ue"' },
    "&:nth-of-type(4)::after": { content: '"ed"' },
    "&:nth-of-type(5)::after": { content: '"hu"' },
    "&:nth-of-type(6)::after": { content: '"ri"' },
    "&:nth-of-type(7)::after": { content: '"at"' },
    // "&:nth-of-type(7)::after": { content: '"un"' },

    "& > *": {
      display: "none",
    },
  },

  ".MuiPickersDay-root": {
    margin: 0,
    padding: 0,
    height: "24px",
    width: "30px",
    fontSize: "0.75rem",

    "&.Mui-selected, &.MuiPickersDay-rangeEnd, &.MuiPickersDay-rangeStart": {
      borderRadius: 4,
    },
  },
});

export default function CustomDateRangeCalendar() {
  const [selectedRange, setSelectedRange] = React.useState([null, null]);

  const handleDateRangeChange = (newRange) => {
    setSelectedRange(newRange);
  };

  const handleShortcut = (shortcut) => {
    const range = shortcut.getValue();
    setSelectedRange(range);
  };

  return (
    <div className="flex">
      <aside className="mt-4 w-72 bg-gray-200 p-4 rounded-md">
        <div className="flex flex-col gap-2 items-start">
          {shortcutsItems.map((shortcut, index) => (
            <button
              key={index}
              onClick={() => handleShortcut(shortcut)}
              className="w-full px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              {shortcut.label}
            </button>
          ))}
        </div>
      </aside>

      <StyledCalendarWrapper>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateRangeCalendar"]}>
            <DateRangeCalendar
              value={selectedRange}
              onChange={handleDateRangeChange}
            />
          </DemoContainer>
        </LocalizationProvider>
      </StyledCalendarWrapper>
    </div>
  );
}
