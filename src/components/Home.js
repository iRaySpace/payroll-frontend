import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}

	render() {
		const store = this.store;
		return (
			<div className='page home'>
				<div className='page__top'>
					<div className='boilerplate-logo' />

					<h1>Payroll - NJR Lumber</h1>

          <p>A simple payroll system for the NJR Lumber Corporation, a company that exports throughout the world.</p>

					<div>
						<a
              className='btn btn--hasIcon'
							href='https://github.com/alexdevero/react-mobx-react-router-boilerplate'
							target='_blank'
						>
							Login
						</a>
					</div>
				</div>
			</div>
		);
	}
}
