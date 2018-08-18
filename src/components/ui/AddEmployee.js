import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const AddEmployee = ({ ...props }) => {
  return (
    <div>
      <Typography component="h1" variant="headline" color="primary">
        Employee Data
      </Typography>
      <Typography component="p" variant="caption" gutterBottom>
        Add employee records to the database.
      </Typography>
      <TextField
        fullWidth
        id="first-name"
        margin="normal"
        label="First Name"
        placeholder="John"
        InputLabelProps={{
          shrink: true,
        }}
        value={props.firstName}
        onChange={e => props.onChange(e)}
      />
      <TextField
        fullWidth
        id="last-name"
        margin="normal"
        label="Last Name"
        placeholder="Doe"
        InputLabelProps={{
          shrink: true,
        }}
        value={props.lastName}
        onChange={e => props.onChange(e)}
      />
      <TextField
        fullWidth
        id="department"
        margin="normal"
        label="Department"
        placeholder="Accounting"
        InputLabelProps={{
          shrink: true,
        }}
        value={props.department}
        onChange={e => props.onChange(e)}
      />
      <Button
        variant="raised"
        size="small"
        color="primary"
        className={props.saveButtonStyle}
        onClick={() => props.onAddEmployee()}
      >
        Save
      </Button>
    </div>
  );
};

export default AddEmployee;