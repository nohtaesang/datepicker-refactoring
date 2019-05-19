import React, { Component } from 'react';
import DatePicker from './datepicker/DatePicker';
import { config } from './config';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedDays: []
		};
	}

	getSelectedDays = (days) => {
		this.setState({ selectedDays: days });
	};

	render() {
		const { selectedDays } = this.state;
		return (
			<div className="App">
				<DatePicker config={config} selectedDays={selectedDays} getSelectedDays={this.getSelectedDays} />
			</div>
		);
	}
}

export default App;
