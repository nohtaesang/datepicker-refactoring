import React, { Component } from 'react';
import DayNames from '../components/dayPicker/DayNames';
import Month from '../components/dayPicker/Month';

class DayPicker extends Component {
	constructor(props) {
		super();
	}

	render() {
		const { today, curYear, curMonth, pickerType, markings, setSelectedDays, selectedDays } = this.props;

		return (
			<div className="month-wrapper">
				<DayNames />
				<Month
					today={today}
					curYear={curYear}
					curMonth={curMonth}
					pickerType={pickerType}
					markings={markings}
					setSelectedDays={setSelectedDays}
					selectedDays={selectedDays}
				/>
			</div>
		);
	}
}

export default DayPicker;
