/* import React, { useState } from "react";
import DataTable from "./DataTable";
import {
  dataTableColumns,
  statusOptions,
  dropdownOptions,
  sampleTableData,
} from "../data/mockData";
import { Chip } from "@mui/material";

const Dashboard = () => {
  const [tableData, setTableData] = useState(sampleTableData);

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
    // Implement your search logic here
  };

  const handleStatusChange = (status) => {
    console.log("Status changed to:", status);
    // Implement your status filter logic here
  };

  const handleDropdownChange = (option) => {
    console.log("Dropdown changed to:", option);
    // Implement your dropdown change logic here
  };

  const handleDownload = () => {
    console.log("Download requested");
    // Implement your download logic here
  };

  const handleFilter = () => {
    console.log("Filter requested");
    // Implement your advanced filter logic here
  };

  return (
    <div className="dashboard-container">
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
      />
    </div>
  );
};

export default Dashboard;
 */

import React, { useState } from "react";
import DataTable from "./DataTable";
import {
  dataTableColumns,
  subRowColumns,
  statusOptions,
  dropdownOptions,
  sampleTableData,
  filterDataBySearchTerm,
  filterDataByStatus,
} from "../data/mockData";
import { Chip } from "@mui/material";

const Dashboard = () => {
  const [tableData, setTableData] = useState(sampleTableData);

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
    if (!status) {
      setTableData(sampleTableData);
      return;
    }
    const filteredData = filterDataByStatus(sampleTableData, status);
    setTableData(filteredData);
  };

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
    console.log("Filter requested");
    alert("Advanced filtering would open here");
    // Implement your advanced filter logic here
  
  };

  return (
    <div className="-container">
      <DataTable
        data={tableData}
        columns={enhancedColumns}
        subColumns={subRowColumns}
        statusOptions={statusOptions}
        dropdownOptions={dropdownOptions}
        onSearchChange={handleSearch}
        onStatusChange={handleStatusChange}
        onDropdownChange={handleDropdownChange}
        onDownload={handleDownload}
        onFilter={handleFilter}
      />
    </div>
  );
};

export default Dashboard;
