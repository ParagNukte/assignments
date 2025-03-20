import React, { useState } from "react";
import { FunnelIcon, CalendarIcon } from "lucide-react";
import BasicRangeShortcuts from "./DateRangePicker"; // Import BasicRangeShortcuts

// Filter Component
const Filter = ({ onApply, onCancel, onClear }) => {
  const [stageStatus, setStageStatus] = useState("Completed");
  const [responsibleParty, setResponsibleParty] = useState("ABC");
  const [dateRange, setDateRange] = useState("dd.mm.yy - dd.mm.yy");
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Handle stage status change
  const handleStageStatusChange = (e) => setStageStatus(e.target.value);

  // Handle responsible party change
  const handleResponsiblePartyChange = (e) =>
    setResponsibleParty(e.target.value);

  // Handle date range apply
  const handleDateRangeApply = (formattedDateRange) => {
    setDateRange(formattedDateRange);
    setShowDatePicker(false); // Close the date picker
  };

  // Handle filter apply
  const handleFilterApply = () => {
    onApply({
      stageStatus,
      responsibleParty,
      dateRange,
    });
  };

  // Render filter options (Stage Status, Responsible Party)
  const renderFilterOptions = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <FilterOption
        label="Stage Status"
        value={stageStatus}
        onChange={handleStageStatusChange}
        options={["Completed", "In Progress", "Not Started"]}
      />
      <FilterOption
        label="Responsible Party"
        value={responsibleParty}
        onChange={handleResponsiblePartyChange}
        options={["ABC", "XYZ", "DEF"]}
      />
    </div>
  );

  // Render Date Range Picker with Calendar Icon
  const renderDateRangePicker = () => (
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Date Range
      </label>
      <div className="relative">
        <input
          type="text"
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="DD-MM-YY - DD-MM-YY"
          readOnly
        />
        <CalendarIcon
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer"
          onClick={() => setShowDatePicker(true)} // Show Date Picker when clicked
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col overflow-auto w-full sm:w-96 md:w-3/3 bg-white border-t border-gray-200 shadow-md text-black">
      <div className="flex items-center overflow-auto justify-between px-4 py-3 border-b border-gray-200">
        <div className="flex items-center">
          <FunnelIcon className="w-5 h-5 mr-2" />
          <span className="font-medium">Filters</span>
        </div>
        <div className="flex items-center">
          <button
            onClick={onClear}
            className="text-blue-500 mr-4 text-sm font-medium"
          >
            Clear Filters
          </button>
          <button onClick={onCancel}>
            <img
              src="/icons/xmark-bold.svg"
              className="w-5 h-5 text-gray-500"
            />
          </button>
        </div>
      </div>

      <div className="p-4">
        {renderFilterOptions()}
        {renderDateRangePicker()}
      </div>

      {/* Date Range Picker Modal (Pop-up) */}
      {showDatePicker && (
        <div className="absolute inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-2 rounded-lg shadow-lg w-auto">
            <BasicRangeShortcuts onApply={handleDateRangeApply} />
            <button
              onClick={() => setShowDatePicker(false)}
              className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-end px-4 py-3 border-t border-gray-200 mt-4">
        <button
          onClick={onCancel}
          className="mr-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          onClick={handleFilterApply}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

// FilterOption Component to handle each option like Stage Status and Responsible Party
const FilterOption = ({ label, value, onChange, options }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <select
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default Filter;
