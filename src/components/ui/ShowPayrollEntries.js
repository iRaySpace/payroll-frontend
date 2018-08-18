import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

const ShowPayrollEntries = ({ ...props }) => {
  console.log(props.payrollEntries.length);
  
  const ZERO_ENTRY_WARNING = (props.payrollEntries.length === 0) 
    ? <p style={{ color: "lightgray" }}>No entries added</p>
    : null;

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Employee Name</TableCell>
            <TableCell>Number of Hours</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.payrollEntries.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.employee_name}</TableCell>
                <TableCell>{entry.number_of_hours}</TableCell>
              </TableRow>
            ))
          }
          {ZERO_ENTRY_WARNING}
        </TableBody>
      </Table>
    </div>
  );
}

export default ShowPayrollEntries;