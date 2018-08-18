import React, { Component } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const AddPayrollEntryDialog = ({ ...props }) => {
  const Employees = props.employees.map(val =>
    <MenuItem value={val.id} key={val.id}>
      {val.first_name} {val.last_name}
    </MenuItem>
  );
  return (
    <div>
      <Dialog open={props.payrollEntrying}>
        <DialogTitle>New Payroll Entry</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ marginBottom: 15 }}>
            To be able to add new employees under this payroll period
          </DialogContentText>
          <InputLabel htmlFor="employee">Employee</InputLabel>
          <Select 
            name="employee"
            value={props.employeeSelected}
            onChange={e => props.onChange(e)}
            input={
              <Input fullWidth />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {Employees}
          </Select>
          <TextField
            fullWidth
            type="number"
            margin="normal"
            id="number-of-hours"
            label="Number of Hours"
            value={props.numberOfHours}
            onChange={e => props.onChange(e)}
            InputLabelProps={{
              shrink: true
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button 
            color="primary"
            onClick={() => props.onCancelPayrollEntry()}
          >
            Cancel
          </Button>
          <Button 
            color="primary"
            onClick={() => props.onAddPayrollEntry()}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddPayrollEntryDialog;