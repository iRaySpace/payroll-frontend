import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const LoginForm = ({ ...props }) => {
  return (
    <div>
      <Typography component="h1" variant="headline" color="primary">
        Login to Dashboard
      </Typography>
      <Typography component="p" variant="caption" gutterBottom>
        Access to the employee records and do a payroll.
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Username"
        placeholder="johndoe"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        placeholder="j0hnd03"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button
        fullWidth
        variant="outlined"
        size="small"
        color="primary"
        className={props.loginButtonStyle}
      >
        Login
      </Button>
    </div>
  );
}

export default LoginForm;