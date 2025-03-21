import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchAndFilters = ({
  searchText,
  setSearchText,
  selectedDropdown,
  setSelectedDropdown,
  data,
  statusOptions,
  selectedStatus,
  onDropdownChange,
  onStatusChange,
}) => {
  return (
    <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
      <div className="flex items-center gap-4 flex-wrap flex-1">
        <FormControl className="w-56 bg-white">
          <InputLabel id="main-dropdown-label">
            All (selected folder)
          </InputLabel>
          <Select
            labelId="main-dropdown-label"
            value={selectedDropdown}
            onChange={onDropdownChange}
            label="Select Option"
            className="h-10"
          >
            {data.map((option, index) => (
              <MenuItem key={index} value={option.value || option.id}>
                {option.label || option.phase}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          placeholder="Search..."
          variant="outlined"
          size="small"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="max-w-sm flex-1 bg-white shadow-sm rounded"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className="text-gray-400" />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <FormControl className="w-56 bg-white">
        <InputLabel id="status-dropdown-label">Status</InputLabel>
        <Select
          labelId="status-dropdown-label"
          value={selectedStatus}
          onChange={(e) => onStatusChange(e.target.value)}
          label="Select Status"
          className="h-10"
        >
          {statusOptions.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SearchAndFilters;
