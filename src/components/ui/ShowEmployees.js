import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

const ShowEmployees = ({ ...props }) => {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Last Name</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Department Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { 
            props.employees.map(emp => (
              <TableRow key={emp.id}>
                <TableCell>{emp.last_name}</TableCell>
                <TableCell>{emp.first_name}</TableCell>
                <TableCell>{emp.department}</TableCell>
              </TableRow>
            )) 
          }
        </TableBody>
      </Table>
    </div>
  );
};

export default ShowEmployees;