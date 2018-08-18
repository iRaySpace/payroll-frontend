import React, { Component } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import Avatar from '@material-ui/core/Avatar';

import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import TableChartIcon from '@material-ui/icons/TableChart';

const SideNavigation = ({ ...props }) => {
  return (
    <List subheader={
      <ListSubheader component="div">
        Payroll System
      </ListSubheader>
    }>
      <ListItem button onClick={() => props.onNavigate("Home")}>
        <Avatar>
          <HomeIcon />
        </Avatar>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button onClick={() => props.onNavigate("AddEmployee")}>
        <Avatar>
          <PersonAddIcon />
        </Avatar>
        <ListItemText primary="Add Employee" />
      </ListItem>
      <ListItem button onClick={() => props.onNavigate("ShowEmployees")}>
        <Avatar>
          <GroupIcon />
        </Avatar>
        <ListItemText primary="Show Employees" />
      </ListItem>
      <ListItem button onClick={() => props.onNavigate("AddPayroll")}>
        <Avatar>
          <TableChartIcon />
        </Avatar>
        <ListItemText primary="Add Payroll" />
      </ListItem>
    </List>
  );
};

export default SideNavigation;