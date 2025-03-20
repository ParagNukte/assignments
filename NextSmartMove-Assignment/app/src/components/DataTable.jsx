import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  IconButton,
  InputAdornment,
  Collapse,
  Box,
  Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SortIcon from "@mui/icons-material/ArrowUpward"; // You can use any sort icon
import DateRangeIcon from "@mui/icons-material/DateRange"; // You can change this to a date icon if needed

export const Row = ({ row, columns }) => {
  const [open, setOpen] = useState(false);
  const hasSubRows = row.subRows && row.subRows.length > 0;

  const getStatusColor = (status) => {
    const normalizedStatus = status.toLowerCase().replace(/\s+/g, ""); // Normalize status
    const statusMap = {
      completed: "#4caf50",
      undefined: "#ff9800",
      notstarted: "red",
      continuing: "#2196f3",
    };

    return statusMap[normalizedStatus] || "#9e9e9e"; // Return a default gray if no match
  };

  // Function to render cell content based on column configuration
  const renderCellContent = (column, item) => {
    const value = item[column.id];

    // Check if the column is 'status'
    if (column.id === "status") {
      return (
        <div
          style={{
            padding: "4px 8px",
            backgroundColor: getStatusColor(value), // Apply background color to status cell
            color: "white", // Ensure text contrast
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          {value}
        </div>
      );
    }

    // Check if the column is 'document' and if item.document is true
    if (column.id === "document" && value === true) {
      return (
        <img
          src="/icons/Group 193548.svg" // Adjust the path to the correct location of the document icon
          className="w-10 h-5" // Adjust size as needed
        />
      );
    }

    // Check if the column is 'date' and render date with icon
    if (column.id === "updateDate" && value) {
      return (
        <div className="flex items-center justify-start space-x-2">
          <img src="/icons/Group 193539.svg" />
          <span>{value}</span>
        </div>
      );
    }

    return value; // For other columns, return the value without special styling
  };

  return (
    <>
      <TableRow hover>
        {/* Expansion control */}
        <TableCell padding="checkbox">
          {hasSubRows ? (
            <IconButton
              size="small"
              onClick={() => setOpen(!open)}
              aria-label="expand row"
            >
              {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            </IconButton>
          ) : (
            <div style={{ width: 28 }}></div>
          )}
        </TableCell>

        {/* Main row data */}
        {columns.map((column) => (
          <TableCell key={column.id} align={column.numeric ? "right" : "left"}>
            {renderCellContent(column, row)}{" "}
          </TableCell>
        ))}
      </TableRow>

      {/* Nested rows */}
      {hasSubRows && (
        <TableRow>
          <TableCell
            style={{ paddingBottom: 0, paddingTop: 0 }}
            colSpan={columns.length + 1}
          >
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Table size="small" aria-label="sub-rows">
                  <TableBody>
                    {row.subRows.map((subRow, subIndex) => (
                      <TableRow key={`${row.id}-sub-${subIndex}`}>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.numeric ? "right" : "left"}
                          >
                            {renderCellContent(column, subRow)}{" "}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

const DataTable = ({
  data = [],
  columns = [],
  onSearchChange = () => {},
  onDropdownChange = () => {},
  onDownload = () => {},
  onFilter = () => {},
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");
  const [selectedDropdown, setSelectedDropdown] = useState("");
  const [showFilters, setShowFilters] = useState(false); // Manage filter visibility
  const [activeFilters, setActiveFilters] = useState(null); // Store active filters
  const [sortDirection, setSortDirection] = useState({}); // Track sort direction for columns

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    onSearchChange(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setSelectedDropdown(event.target.value);
    onDropdownChange(event.target.value);
  };

  const handleApplyFilters = (filters) => {
    setActiveFilters(filters);
    setShowFilters(false); // Close filter modal
    onFilter(filters); // Notify parent component that filters are applied
  };

  const handleClearFilters = () => {
    setActiveFilters(null);
    setShowFilters(false); // Close filter modal
    onFilter(null); // Notify parent component that filters are cleared
  };

  const handleSort = (columnId) => {
    setSortDirection((prevState) => {
      const currentDirection = prevState[columnId] || "asc";
      const newDirection = currentDirection === "asc" ? "desc" : "asc";
      return { ...prevState, [columnId]: newDirection };
    });
  };

  // Sort the data based on the sort direction
  const sortedData = data.sort((a, b) => {
    return columns.map((column) => {
      const direction = sortDirection[column.id] || "asc";
      const aValue = a[column.id];
      const bValue = b[column.id];

      if (aValue < bValue) return direction === "asc" ? -1 : 1;
      if (aValue > bValue) return direction === "asc" ? 1 : -1;
      return 0;
    })[0]; // Sorting based on the first column for simplicity
  });

  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <FormControl className="w-44">
            <InputLabel id="main-dropdown-label">
              All (selected folder)
            </InputLabel>
            <Select
              labelId="main-dropdown-label"
              value={selectedDropdown}
              onChange={handleDropdownChange}
              label="Select Option"
              className="w-full h-10"
            >
              {data.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            placeholder="Search..."
            variant="outlined"
            size="small"
            value={searchText}
            onChange={handleSearchChange}
            className="flex-grow max-w-md h-10 w-full"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-2 items-center">
            <Button
              startIcon={
                <img
                  src="/icons/arrow-down-to-line.svg"
                  alt="Download Icon"
                  className="w-5 h-5"
                />
              }
              onClick={onDownload}
              className="bg-white h-10"
            />
            <IconButton
              onClick={() => setShowFilters(!showFilters)}
              color="primary"
              className="h-10"
            >
              <img
                src="/icons/filter.svg"
                alt="Filter Icon"
                className="w-5 h-5"
              />
            </IconButton>
          </div>
        </div>
      </div>

      {showFilters && (
        <div className="fixed inset-0 bg-white z-50 flex items-start justify-center pt-16">
          <div className="bg-white rounded-md shadow-lg w-full max-w-2xl">
            <Filter
              onApply={handleApplyFilters}
              onCancel={() => setShowFilters(false)}
              onClear={handleClearFilters}
            />
          </div>
        </div>
      )}

      <TableContainer component={Paper} className="mb-4">
        <Table sx={{ minWidth: 650 }} aria-label="data table">
          <TableHead>
            <TableRow className="bg-gray-100">
              <TableCell
                padding="checkbox"
                style={{ width: "48px" }}
              ></TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.numeric ? "right" : "left"}
                  className="font-bold"
                  style={{ width: column.width || "auto" }}
                >
                  {column.label}
                  <Tooltip title={`Sort by ${column.label}`}>
                    <IconButton onClick={() => handleSort(column.id)}>
                      <img src="/icons/caret-down.svg" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.length > 0 ? (
              sortedData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => <Row key={row.id} row={row} columns={columns} />)
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length + 1} align="center">
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      {sortedData.length > 0 && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={sortedData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </div>
  );
};

export default DataTable;
