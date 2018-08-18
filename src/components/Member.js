import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core';

import SideNavigation from './ui/SideNavigation';
import AddEmployee from './ui/AddEmployee';
import ShowEmployees from './ui/ShowEmployees';
import AddPayroll from './ui/AddPayroll';

import Protected from './Protected';

@inject('store')
@observer
class Member extends Component {
	constructor(props) {
		super(props);

		// Initialize the component by fetching data
		this.props.store.appState.fetchEmployees();

	}

	onNavigate(menu) {
		const { appState } = this.props.store;
		appState.setMenu(menu);
	}

	onChange(e) {
		const { appState } = this.props.store;
		if (e.target.id === "first-name") {
			appState.setFirstName(e.target.value);
		} else if (e.target.id === "last-name") {
			appState.setLastName(e.target.value);
		} else if (e.target.id === "department") {
			appState.setDepartment(e.target.value);
		} else if (e.target.id === "description") {
			appState.setDescription(e.target.value);
		} else if (e.target.id === "from-date") {
			appState.setFromDate(e.target.value);
		} else if (e.target.id === "to-date") {
			appState.setToDate(e.target.value);
		} else if (e.target.name === "employee") {
			appState.setEmployeeSelected(e.target.value);
		} else if (e.target.id === "number-of-hours") {
			appState.setNumberOfHours(e.target.value);
		}
	}

	onAddEmployee() {
		const { appState } = this.props.store;
		appState.addEmployee();
	}

	onAddPayroll() {
		const { appState } = this.props.store;
		appState.addPayroll();
	}

	onAddPayrollEntry() {
		const { appState } = this.props.store;
		appState.addPayrollEntry();
	}

	onPayrollEntry() {
		const { appState } = this.props.store;
		appState.setPayrollEntrying(true);
	}

	onCancelPayrollEntry() {
		const { appState } = this.props.store;
		appState.setPayrollEntrying(false);
	}

	render() {
	
		// Styles
		const { classes } = this.props;
		
		let Menu = null;
		
		// Application State
		const { appState } = this.props.store;
		
		if(appState.currentMenu === "Home") {
			Menu = (
				<Grid item xs={9}>
					<Paper className={classes.card} elevation={1}>
						<Typography component="h1" variant="headline" color="primary">
							Welcome to the Payroll Systems
						</Typography>
						<Typography component="p" variant="subheading" color="textSecondary">
							This is a simple payroll systems for the NJR Lumber.
						</Typography>
					</Paper>
				</Grid>
			);
		} else if(appState.currentMenu === "AddEmployee") {
			Menu = (
				<Grid item xs={4}>
					<Paper className={classes.card} elevation={1}>
						<AddEmployee 
							lastName={appState.lastName}
							firstName={appState.firstName}
							department={appState.department}
							onChange={e => this.onChange(e)}
							onAddEmployee={() => this.onAddEmployee()}
							saveButtonStyle={classes.save} 
						/>
					</Paper>
				</Grid>
			);
		} else if(appState.currentMenu === "ShowEmployees") {
			if (!appState.fetchedError) {
				Menu = (
					<Grid item xs={9}>
						<Paper elevation={1}>
							<ShowEmployees employees={appState.employees.slice()} />
						</Paper>
					</Grid>
				);
			} else {
				Menu = (
					<Grid item xs={9}>
						<Paper className={classes.card} elevation={1}>
							Error fetching employees.
						</Paper>
					</Grid>
				)
			}
		} else if(appState.currentMenu === "AddPayroll") {
			Menu = (
				<Grid item xs={9}>
					<Paper className={classes.card} elevation={1}>
						<AddPayroll 
							toDate={appState.toDate}
							fromDate={appState.fromDate}
							onChange={e => this.onChange(e)}
							description={appState.description}
							numberOfHours={appState.numberOfHours}
							employees={appState.employees.slice()}
							onAddPayroll={() => this.onAddPayroll()} 
							payrollEntries={appState.payrollEntries}
							payrollEntrying={appState.payrollEntrying}
							onPayrollEntry={() => this.onPayrollEntry()}
							employeeSelected={appState.employeeSelected}
							onAddPayrollEntry={() => this.onAddPayrollEntry()}
							onCancelPayrollEntry={() => this.onCancelPayrollEntry()}
						/>
					</Paper>
				</Grid>
			);
		}

		return (
			<div className={classes.root}>
				<Grid container spacing={24}>
					<Grid item xs={3}>
						<Paper elevation={1}>
							<SideNavigation onNavigate={menu => this.onNavigate(menu)} />
						</Paper>
					</Grid>
					{Menu}
				</Grid>
			</div>
		);
	}
}

const styles = theme => ({
	root: {
		paddingTop: theme.spacing.unit * 3,
		paddingLeft: theme.spacing.unit * 3,
		paddingRight: theme.spacing.unit * 3,
	},
	card: {
		padding: theme.spacing.unit * 2,
	},
	save: {
		marginTop: theme.spacing.unit,
	}
});

export default withStyles(styles)(Protected(Member));