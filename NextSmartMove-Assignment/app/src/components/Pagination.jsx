import React from 'react';
import { TablePagination } from '@mui/material';

const Pagination = ({ count, rowsPerPage, page, onPageChange, onRowsPerPageChange }) => (
  <TablePagination
    rowsPerPageOptions={[5, 10, 25, 50]}
    component="div"
    count={count}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={onPageChange}
    onRowsPerPageChange={onRowsPerPageChange}
    sx={{
      '.MuiTablePagination-toolbar': { flexWrap: 'wrap' },
      '.MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows': { margin: '8px 0' },
    }}
  />
);

export default Pagination;
