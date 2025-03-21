import React, { useState, useMemo, useCallback } from "react";
import Row from "./RowRender";
import SearchAndFilters from "./SearchAndFilter";
import DocumentModal from "./DocumentModal";
import PaginationComponent from "./Pagination";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import GetAppIcon from "@mui/icons-material/GetApp";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const DataTable = ({
  data = [],
  columns = [],
  statusOptions = [],
  onSearchChange = () => {},
  onDropdownChange = () => {},
  onStatusChange = () => {},
  onDownload = () => {},
  onFilter = () => {},
  onDocumentClick = () => {},
  selectedStatus = "",
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");
  const [selectedDropdown, setSelectedDropdown] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [agreementData, setAgreementData] = useState(null);
  const [sortConfig, setSortConfig] = useState({
    key: columns.length > 0 ? columns[0].id : null,
    direction: "asc",
  });

  const filterData = useCallback(
    (data, searchTerm) => {
      return data.filter((item) => {
        return columns.some(
          (column) =>
            item[column.id] &&
            item[column.id]
              .toString()
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
        );
      });
    },
    [columns]
  );

  const filteredData = useMemo(
    () => filterData(data, searchText),
    [data, searchText, filterData]
  );

  const sortedData = useMemo(() => {
    const sortableData = [...filteredData];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue === bValue) return 0;
        if (aValue === undefined)
          return sortConfig.direction === "asc" ? 1 : -1;
        if (bValue === undefined)
          return sortConfig.direction === "asc" ? -1 : 1;

        if (typeof aValue === "string" && typeof bValue === "string") {
          return sortConfig.direction === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }

        return sortConfig.direction === "asc"
          ? aValue - bValue
          : bValue - aValue;
      });
    }
    return sortableData;
  }, [filteredData, sortConfig]);

  const handleDocumentClick = (item) => {
    setAgreementData(item.agreement);
    setIsModalOpen(true);
  };

  const handleSearchChange = (value) => {
    setSearchText(value);
    onSearchChange(value);
  };

  const handleDropdownChange = (e) => {
    setSelectedDropdown(e.target.value);
    onDropdownChange(e.target.value);
  };

  const handleStatusChange = (newStatus) => {
    onStatusChange(newStatus);
  };

  const handleFilterClick = () => {
    setShowFilters(!showFilters);
    onFilter(showFilters);
  };

  const handleDownloadClick = () => {
    onDownload(sortedData);
  };

  const handleSort = (columnId) => {
    let direction = "asc";
    if (sortConfig.key === columnId && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key: columnId, direction });
  };

  const getSortIcon = (columnId) => {
    if (sortConfig.key !== columnId) return null;

    return sortConfig.direction === "asc" ? (
      <ArrowUpwardIcon fontSize="small" />
    ) : (
      <ArrowDownwardIcon fontSize="small" />
    );
  };

  return (
    <div className="w-full p-4 mr-36">
      <div className="flex justify-between items-center mb-4">
        <SearchAndFilters
          searchText={searchText}
          setSearchText={handleSearchChange}
          selectedDropdown={selectedDropdown}
          setSelectedDropdown={handleDropdownChange}
          data={data}
          statusOptions={statusOptions}
          selectedStatus={selectedStatus}
          onDropdownChange={handleDropdownChange}
          onStatusChange={handleStatusChange}
        />

        <div className="flex space-x-2">
          <Tooltip title="Download">
            <IconButton onClick={handleDownloadClick}>
              <GetAppIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Filter">
            <IconButton
              onClick={handleFilterClick}
              className={showFilters ? "bg-blue-100" : ""}
            >
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width="50px"></TableCell>{" "}
              {/* Empty cell for expand icon */}
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  onClick={() => handleSort(column.id)}
                  style={{ cursor: "pointer" }}
                  className="select-none"
                >
                  <div className="flex items-center space-x-1">
                    <span>{column.label}</span>
                    {getSortIcon(column.id)}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.length > 0 ? (
              sortedData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <Row
                    key={row.id}
                    row={row}
                    columns={columns}
                    onDocumentClick={handleDocumentClick}
                    isLastRow={index === sortedData.length - 1}
                  />
                ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length + 1}>
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <PaginationComponent
        count={sortedData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        onRowsPerPageChange={(e) =>
          setRowsPerPage(parseInt(e.target.value, 10))
        }
      />

      <DocumentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        agreementData={agreementData}
      />
    </div>
  );
};

export default DataTable;
