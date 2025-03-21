import React, { useState } from "react";
import DataTable from "./DataTable";
import {
  dataTableColumns,
  statusOptions,
  dropdownOptions,
  sampleTableData,
  filterDataBySearchTerm,
  filterDataByStatus,
} from "../data/mockData";
import { Chip } from "@mui/material";
import RightSidebar from "./RightSidebar";
import Sidebar from "./Sidebar";
import Filter from "./Filter";

const Dashboard = () => {
  const [tableData, setTableData] = useState(sampleTableData);
  const [showFilter, setShowFilter] = useState(false);
  const [status, setStatus] = useState("");
  // Configure column rendering for the data table
  const enhancedColumns = dataTableColumns.map((column) => {
    // Add custom rendering for the status column
    if (column.id === "status") {
      return {
        ...column,
        render: (value) => {
          const statusOption = statusOptions.find(
            (option) => option.value === value
          );
          return (
            <Chip
              label={statusOption?.label || value}
              color={statusOption?.color || "default"}
              size="small"
              sx={{
                fontWeight: 500,
                borderRadius: "4px",
                padding: "0 4px",
              }}
            />
          );
        },
      };
    }
    return column;
  });

  // Event handlers
  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
    if (!searchTerm.trim()) {
      setTableData(sampleTableData);
      return;
    }
    const filteredData = filterDataBySearchTerm(sampleTableData, searchTerm);
    setTableData(filteredData);
  };

  const handleStatusChange = (status) => {
    console.log("Status changed to:", status);
    setStatus(status);
    if (!status) {
      setTableData(sampleTableData);
      return;
    }
    const filteredData = filterDataByStatus(sampleTableData, status);
    console.log(filteredData)
    setTableData(filteredData);
  };
 /*  export const filterDataByStatus = (data, status) => {
    if (!status || status === "") {
      return data;
    }
    let newData = data.filter((item) => item.status === status);
    console.log("newdata", newData);
    return data.filter((item) => item.status === status);
  };
 */
  const handleDropdownChange = (option) => {
    console.log("Dropdown changed to:", option);
    // Reset to original data first
    let newData = [...sampleTableData];

    // Apply filters based on dropdown selection
    switch (option) {
      case "recent":
        // Sort by most recent update date
        newData.sort((a, b) => {
          const dateA = new Date(a.updateDate);
          const dateB = new Date(b.updateDate);
          return dateB - dateA;
        });
        break;
      case "archived":
        // Show only inactive items
        newData = newData.filter((item) => item.status === "inactive");
        break;
      case "all":
      default:
        // Keep original data
        break;
    }

    setTableData(newData);
  };

  const handleDownload = () => {
    console.log("Download requested");
    alert("Downloading data...");
    // Implement your download logic here
  };

  const handleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleMenuItemClick = (key) => {
    console.log(`Menu item clicked: ${key}`);
    // Handle navigation or content display based on the clicked item
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="flex-1 flex flex-col overflow-hidden w-screen">
        {/* Header could go here if needed */}

        {/* Content area */}
        <div className="flex-1 overflow-auto">
          {showFilter && (
            <div className="mb-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <Filter />
            </div>
          )}

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <DataTable
              data={tableData}
              columns={enhancedColumns}
              statusOptions={statusOptions}
              dropdownOptions={dropdownOptions}
              onSearchChange={handleSearch}
              onStatusChange={handleStatusChange}
              onDropdownChange={handleDropdownChange}
              onDownload={handleDownload}
              onFilter={handleFilter}
              selectedStatus={status}
            />
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-20 h-full">
        <RightSidebar onMenuItemClick={handleMenuItemClick} />
      </div>
    </div>
  );
};

export default Dashboard;
