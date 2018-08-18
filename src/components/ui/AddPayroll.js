import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ShowPayrollEntries from './ShowPayrollEntries';
import AddPayrollEntryDialog from './AddPayrollEntryDialog';

const AddPayroll = ({ ...props }) => {
  return (
    <div>
      <AddPayrollEntryDialog 
        employees={props.employees}
        onChange={e => props.onChange(e)}
        numberOfHours={props.numberOfHours}
        payrollEntrying={props.payrollEntrying}
        employeeSelected={props.employeeSelected}
        onAddPayrollEntry={() => props.onAddPayrollEntry()}
        onCancelPayrollEntry={() => props.onCancelPayrollEntry()}
      />
      <Typography component="h1" variant="headline" color="primary">
        Add Payroll
      </Typography>
      <Typography component="p" variant="caption" gutterBottom>
        Add Payroll entries to the database.
      </Typography>
      <TextField
        fullWidth
        id="description"
        margin="normal"
        label="Description"
        placeholder="A simple description for the payroll"
        InputLabelProps={{
          shrink: true,
        }}
        value={props.description}
        onChange={e => props.onChange(e)}
      />
      <TextField
        id="from-date"
        margin="normal"
        label="From Date"
        type="date"
        InputLabelProps={{
          shrink: true, 
        }}
        style={{ marginRight: "3em" }}
        value={props.fromDate}
        onChange={e => props.onChange(e)}
      />
      <TextField
        id="to-date"
        margin="normal"
        label="To Date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        value={props.toDate}
        onChange={e => props.onChange(e)}
      />
      <div>
        <Button
          variant="raised"
          size="small"
          color="primary"
          onClick={() => props.onPayrollEntry()}
        >
          Add Row
        </Button>
      </div>
      <ShowPayrollEntries payrollEntries={props.payrollEntries} />
      <div style={{ marginTop: 15 }}>
        <Button
          variant="raised"
          size="small"
          color="primary"
          onClick={() => props.onAddPayroll()}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default AddPayroll;