import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';

import LoginForm from './ui/LoginForm';

@inject('store')
@observer
class Login extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				{this.props.store.authenticated &&
					!this.props.store.authenticating &&
					<Redirect to='/' />}
				<Grid container spacing={24}>
					<Grid item xs={4} />
					<Grid item xs={4}>
						<Paper className={classes.card} elevation={1}>
							<LoginForm loginButtonStyle={classes.login} />
						</Paper>
					</Grid>
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
	login: {
		marginTop: theme.spacing.unit,
	}
});

export default withStyles(styles)(Login);