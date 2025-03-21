import React, { useState, useMemo, useCallback } from "react";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ConfidentialityAgreement from "./ConfidentialityAgreement";

// Row Component with React.memo for performance optimization
const Row = React.memo(({ row, columns, onDocumentClick, isLastRow }) => {
  const [open, setOpen] = useState(false);
  const hasSubRows = row.subRows && row.subRows.length > 0;

  const getStatusColor = (status) => {
    const normalizedStatus = status.toLowerCase().replace(/\s+/g, "");
    switch (normalizedStatus) {
      case "completed":
        return "bg-green-500";
      case "undefined":
        return "bg-amber-500";
      case "notstarted":
        return "bg-red-500";
      case "continuing":
        return "bg-blue-500";
      default:
        return "bg-gray-400";
    }
  };

  const renderCellContent = (column, item, isSubRow = false) => {
    const value = item[column.id];

    if (column.id === "status") {
      return (
        <div
          className={`px-2.5 py-1.5 rounded-md font-medium text-sm text-white text-center inline-block w-full max-w-[120px] ${getStatusColor(
            value
          )}`}
        >
          {value}
        </div>
      );
    }

    if (column.id === "document" && value === true) {
      return (
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation(); // Prevent row expansion when clicking document
            onDocumentClick(item); // Trigger the modal
          }}
        >
          <img
            src="/icons/Group 193548.svg"
            className="w-5 h-5"
            alt="Document"
          />
          <span>V{item.id}</span>
        </div>
      );
    }

    if (column.id === "updateDate" && value) {
      return (
        <div className="flex items-center space-x-2">
          <img
            src="/icons/Group 193539.svg"
            className="w-4 h-4 opacity-60"
            alt="Calendar"
          />
          <span>{value}</span>
        </div>
      );
    }

    // Add indentation only for phase column in subrows
    if (isSubRow && column.id === "id") {
      return <div className="pl-1">{value}</div>;
    }

    return value;
  };

  return (
    <>
      <TableRow
        className={`rounded-lg bg-white hover:bg-gray-50 h-14`}
        style={{
          marginBottom: "4px", // Reduced gap between parent rows
        }}
      >
        <TableCell className="p-3 border-b-0 rounded-l-lg w-10">
          {hasSubRows ? (
            <IconButton
              size="small"
              className="p-1"
              aria-label="expand row"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(!open);
              }}
            >
              {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            </IconButton>
          ) : (
            <div className="w-6"></div>
          )}
        </TableCell>

        {columns.map((column, index) => (
          <TableCell
            key={column.id}
            align={column.align}
            className={`border-b-0 ${
              index === columns.length - 1 ? "rounded-r-lg" : ""
            }`}
            style={{ width: column.width }}
          >
            {renderCellContent(column, row)}
          </TableCell>
        ))}
      </TableRow>

      {hasSubRows && (
        <TableRow className={open ? "bg-white" : "hidden"}>
          <TableCell className="p-0 border-0" colSpan={columns.length + 1}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <div className="bg-white">
                <Table size="small" aria-label="sub-rows">
                  <TableBody>
                    {row.subRows.map((subRow, subIndex) => (
                      <TableRow
                        key={`${row.id}-sub-${subIndex}`}
                        className="hover:bg-gray-50 h-14" // Same height as parent
                      >
                        <TableCell className="p-3 border-b-0 w-10">
                          <div className="w-6"></div>
                        </TableCell>

                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            className="p-3 border-b-0"
                            style={{ width: column.width }}
                          >
                            {renderCellContent(column, subRow, true)}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
});

export default Row;