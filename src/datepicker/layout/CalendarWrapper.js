import React, { Component } from 'react';
import Header from '../containers/Header';
import DayPicker from '../containers/DayPicker';
import Footer from '../containers/Footer';
import { getSortedMarkings } from '../components/utils/markingUtil';

class CalendarWrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			markings: []
		};
	}

	componentDidMount() {
		const { config } = this.props;
		const { markings } = config;
		this.setState({ markings: getSortedMarkings(markings) });
	}

	render() {
		const {
			isFocus,
			today,
			curYear,
			curMonth,
			onClickPrevMonth,
			onClickNextMonth,
			config,
			setSelectedDays,
			selectedDays
		} = this.props;
		const { pickerType } = config;
		const { markings } = this.state;

		if (!isFocus) return null;

		return (
			<div className="calendar-wrapper">
				<Header
					today={today}
					curYear={curYear}
					curMonth={curMonth}
					onClickPrevMonth={onClickPrevMonth}
					onClickNextMonth={onClickNextMonth}
				/>
				<DayPicker
					today={today}
					curYear={curYear}
					curMonth={curMonth}
					pickerType={pickerType}
					markings={markings}
					setSelectedDays={setSelectedDays}
					selectedDays={selectedDays}
				/>
				<Footer />
			</div>
		);
	}
}

export default CalendarWrapper;
