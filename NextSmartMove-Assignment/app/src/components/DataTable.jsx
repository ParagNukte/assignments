// import React, { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TablePagination,
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Button,
//   IconButton,
//   InputAdornment,
//   Collapse,
//   Box,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// // Row component to handle individual rows and their expansion
// const Row = ({ row, columns, subColumns }) => {
//   const [open, setOpen] = useState(false);
//   const hasSubRows = row.subRows && row.subRows.length > 0;

//   return (
//     <>
//       <TableRow hover className={row.id % 2 === 0 ? "bg-white" : "bg-gray-50"}>
//         {/* Expansion control */}
//         <TableCell padding="checkbox">
//           {hasSubRows ? (
//             <IconButton
//               size="small"
//               onClick={() => setOpen(!open)}
//               aria-label="expand row"
//             >
//               {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
//             </IconButton>
//           ) : (
//             <div className="w-10"></div> {/* Spacer if no subrows */}
//           )}
//         </TableCell>

//         {/* Main row data */}
//         {columns.map((column) => {
//           const value = row[column.id];
//           return (
//             <TableCell
//               key={column.id}
//               align={column.numeric ? "right" : "left"}
//             >
//               {column.render ? column.render(value, row) : value}
//             </TableCell>
//           );
//         })}
//       </TableRow>

//       {/* Nested rows */}
//       {hasSubRows && (
//         <TableRow>
//           <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={columns.length + 1}>
//             <Collapse in={open} timeout="auto" unmountOnExit>
//               <Box sx={{ margin: 1 }}>
//                 <Table size="small" aria-label="sub-rows">
//                   <TableHead>
//                     <TableRow className="bg-gray-100">
//                       {subColumns.map((column) => (
//                         <TableCell
//                           key={column.id}
//                           align={column.numeric ? "right" : "left"}
//                           className="font-medium text-sm"
//                         >
//                           {column.label}
//                         </TableCell>
//                       ))}
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {row.subRows.map((subRow, subIndex) => (
//                       <TableRow
//                         key={`${row.id}-sub-${subIndex}`}
//                         className={subIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
//                       >
//                         {subColumns.map((column) => (
//                           <TableCell
//                             key={column.id}
//                             align={column.numeric ? "right" : "left"}
//                           >
//                             {column.render
//                               ? column.render(subRow[column.id], subRow)
//                               : subRow[column.id]}
//                           </TableCell>
//                         ))}
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </Box>
//             </Collapse>
//           </TableCell>
//         </TableRow>
//       )}
//     </>
//   );
// };

// const DataTable = ({
//   data = [],
//   columns = [],
//   subColumns = [],
//   statusOptions = [],
//   dropdownOptions = [],
//   onSearchChange = () => {},
//   onStatusChange = () => {},
//   onDropdownChange = () => {},
//   onDownload = () => {},
//   onFilter = () => {},
// }) => {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [searchText, setSearchText] = useState("");
//   const [selectedStatus, setSelectedStatus] = useState("");
//   const [selectedDropdown, setSelectedDropdown] = useState("");

//   // Handle page change
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   // Handle rows per page change
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   // Handle search input change
//   const handleSearchChange = (event) => {
//     setSearchText(event.target.value);
//     onSearchChange(event.target.value);
//   };

//   // Handle status dropdown change
//   const handleStatusChange = (event) => {
//     setSelectedStatus(event.target.value);
//     onStatusChange(event.target.value);
//   };

//   // Handle main dropdown change
//   const handleDropdownChange = (event) => {
//     setSelectedDropdown(event.target.value);
//     onDropdownChange(event.target.value);
//   };

//   return (
//     <div className="w-full h-full">
//       <div className="flex flex-wrap items-center justify-between mb-4 ">
//         <div className="flex items-center">
//           <FormControl className="w-40">
//             <InputLabel id="main-dropdown-label">
//               All(selected folder){" "}
//             </InputLabel>
//             <Select
//               title="Selected Option"
//               labelId="main-dropdown-label"
//               value={selectedDropdown}
//               onChange={handleDropdownChange}
//               label="Select Option"
//               className="w-full"
//             >
//               {dropdownOptions.map((option) => (
//                 <MenuItem key={option.value} value={option.value}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//           {/* Search Bar */}
//           <TextField
//             placeholder="Search..."
//             variant="outlined"
//             size="small"
//             value={searchText}
//             onChange={handleSearchChange}
//             className="flex-grow max-w-md"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon />
//                 </InputAdornment>
//               ),
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton size="small">
//                     <img
//                       src="/icons/microphone.svg"
//                       alt="Mic Icon"
//                       className="w-5 h-5"
//                     />
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </div>

//         <div className="flex gap-4">
//           {/* Status Dropdown */}
//           <FormControl className="w-42">
//             <InputLabel id="status-dropdown-label">Status</InputLabel>
//             <Select
//               labelId="status-dropdown-label"
//               value={selectedStatus}
//               onChange={handleStatusChange}
//               label="Status"
//             >
//               <MenuItem value="">All</MenuItem>
//               {statusOptions.map((option) => (
//                 <MenuItem key={option.value} value={option.value}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//           {/* Action Buttons */}
//           <div className="flex gap-2">
//             <Button
//               startIcon={
//                 <img
//                   src="/icons/arrow-down-to-line.svg"
//                   alt="Download Icon"
//                   className="w-5 h-5"
//                 />
//               }
//               onClick={onDownload}
//               className="bg-white"
//             />
//             <IconButton onClick={onFilter} color="primary">
//               <img
//                 src="/icons/filter.svg"
//                 alt="Filter Icon"
//                 className="w-5 h-5"
//               />
//             </IconButton>
//           </div>
//         </div>
//       </div>

//       {/* Data Table */}
//       <TableContainer component={Paper} className="mb-4">
//         <Table sx={{ minWidth: 650 }} aria-label="data table">
//           <TableHead>
//             <TableRow className="bg-gray-100">
//               {/* Column for expansion icon */}
//               <TableCell padding="checkbox" style={{ width: "48px" }}></TableCell>

//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.numeric ? "right" : "left"}
//                   className="font-bold"
//                   style={{ width: column.width || "auto" }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.length > 0 ? (
//               data
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row) => (
//                   <Row
//                     key={row.id}
//                     row={row}
//                     columns={columns}
//                     subColumns={subColumns}
//                   />
//                 ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={columns.length + 1} align="center">
//                   No data available
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Pagination */}
//       {data.length > 0 && (
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25, 50]}
//           component="div"
//           count={data.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       )}
//     </div>
//   );
// };

// export default DataTable;

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
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  subRowColumns,
  taskStatusOptions,
  priorityOptions,
} from "../data/mockData";

// Row component to handle individual rows and their expansion
const Row = ({ row, columns, subRowsColumns }) => {
  const [open, setOpen] = useState(false);
  const hasSubRows = row.subRows && row.subRows.length > 0;

  const renderSubRowStatus = (value) => {
    const option = taskStatusOptions.find((opt) => opt.value === value);
    return (
      <Chip
        label={option?.label || value}
        color={option?.color || "default"}
        size="small"
      />
    );
  };

  const renderSubRowPriority = (value) => {
    const option = priorityOptions.find((opt) => opt.value === value);
    return (
      <Chip
        label={option?.label || value}
        color={option?.color || "default"}
        size="small"
        variant="outlined"
      />
    );
  };

  // Function to render cell content based on column configuration
  const renderCellContent = (column, item) => {
    const value = item[column.id];

    // Use column's custom render function if provided
    if (column.render) {
      return column.render(value, item);
    }

    // Special rendering for sub-row status and priority
    if (column.id === "taskStatus") {
      return renderSubRowStatus(value);
    }

    if (column.id === "priority") {
      return renderSubRowPriority(value);
    }

    return value;
  };

  return (
    <>
      <TableRow hover className={row.id % 2 === 0 ? "bg-white" : "bg-gray-50"}>
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
        {columns.map((column) => {
          const value = row[column.id];
          return (
            <TableCell
              key={column.id}
              align={column.numeric ? "right" : "left"}
            >
              {column.render ? column.render(value, row) : value}
            </TableCell>
          );
        })}
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
                  <TableHead>
                    <TableRow className="bg-gray-100">
                      {subRowsColumns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.numeric ? "right" : "left"}
                          className="font-medium text-sm"
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.subRows.map((subRow, subIndex) => (
                      <TableRow
                        key={`${row.id}-sub-${subIndex}`}
                        className={
                          subIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }
                      >
                        {subRowsColumns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.numeric ? "right" : "left"}
                          >
                            {renderCellContent(column, subRow)}
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
  subColumns = subRowColumns, // Default to imported subRowColumns
  statusOptions = [],
  dropdownOptions = [],
  onSearchChange = () => {},
  onStatusChange = () => {},
  onDropdownChange = () => {},
  onDownload = () => {},
  onFilter = () => {},
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedDropdown, setSelectedDropdown] = useState("");

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    onSearchChange(event.target.value);
  };

  // Handle status dropdown change
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
    onStatusChange(event.target.value);
  };

  // Handle main dropdown change
  const handleDropdownChange = (event) => {
    setSelectedDropdown(event.target.value);
    onDropdownChange(event.target.value);
  };

  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <FormControl className="w-44">
            <InputLabel id="main-dropdown-label">
              All (selected folder)
            </InputLabel>
            <Select
              title="Selected Option"
              labelId="main-dropdown-label"
              value={selectedDropdown}
              onChange={handleDropdownChange}
              label="Select Option"
              className="w-full h-10"
            >
              {dropdownOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Search Bar */}
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
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size="small" className="h-10">
                    <img
                      src="/icons/microphone.svg"
                      alt="Mic Icon"
                      className="w-5 h-5"
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="flex items-center gap-4">
          {/* Status Dropdown */}
          <FormControl className="w-42">
            <InputLabel id="status-dropdown-label">Status</InputLabel>
            <Select
              labelId="status-dropdown-label"
              value={selectedStatus}
              onChange={handleStatusChange}
              label="Status"
              className="h-10"
            >
              <MenuItem value="">All</MenuItem>
              {statusOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Action Buttons */}
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
            <IconButton onClick={onFilter} color="primary" className="h-10">
              <img
                src="/icons/filter.svg"
                alt="Filter Icon"
                className="w-5 h-5"
              />
            </IconButton>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <TableContainer component={Paper} className="mb-4">
        <Table sx={{ minWidth: 650 }} aria-label="data table">
          <TableHead>
            <TableRow className="bg-gray-100">
              {/* Column for expansion icon */}
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
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <Row
                    key={row.id}
                    row={row}
                    columns={columns}
                    subRowsColumns={subColumns}
                  />
                ))
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
      {data.length > 0 && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={data.length}
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
