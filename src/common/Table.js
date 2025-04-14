import React from 'react';
import {
  Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper
} from '@mui/material';

const CustomTable = ({data=[],columns=[], title=""}) => {
  return (
    <>
      <h6 className='caption underline mb-6'>{title}</h6>
      <TableContainer component={Paper} elevation={0}  className="overflow-hidden border-0 shadow-none">
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#fff' }}>
              {columns.map((column, columnIndex) => (
                <TableCell
                  key={column.id}
                  sx={{ fontSize: '12px', fontWeight: 700, color: "#000",
                    padding: columnIndex === 0 ? '2px 4px 15px 0' : columnIndex === columns.length -1 ? '2px 0 15px 4px' : '2px 4px 15px',
                    borderRadius: columnIndex === 0 ? '4px 0px 0px 4px' : columnIndex === columns.length -1 ? '0px 4px 4px 0px' : '0px 0px'
                   }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                sx={{
                  backgroundColor: rowIndex % 2 === 0 ? '#d9d9d9' : '#ffffff',
                  '& td': {
                    fontSize: '12px',
                    padding: rowIndex % 2 === 0 ? '2px 4px' : '15px 4px',
                    border: 'none',
                  },
                }}
              >
                {row.map((cell, cellIndex) => (
                  <TableCell key={cell.id} sx={{
                    borderRadius: cellIndex === 0 ? '4px 0px 0px 4px' : cellIndex === columns.length -1 ? '0px 4px 4px 0px' : '0px 0px'
                  }}>{cell.label}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </>
  );
};

export default CustomTable;
