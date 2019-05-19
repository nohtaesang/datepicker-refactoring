import React, { Component } from 'react';
import './datepicker.css';
import InputWrapper from './layout/InputWrapper';
import CalendarWrapper from './layout/CalendarWrapper';
import onClickOutside from 'react-onclickoutside';

class DatePicker extends Component {
	constructor(props) {
		super();
		this.datePickerRef = React.createRef();
		this.state = {
			isFocus: true,
			today: new Date(),
			curYear: null,
			curMonth: null,
			result: null
		};
	}

	componentDidMount() {
		const { today } = this.state;
		this.setState({
			curYear: today.getFullYear(),
			curMonth: today.getMonth()
		});
	}

	handleClickOutside = (e) => {
		// this.setState({ isFocus: false });
	};

	onClickInput = (e) => {
		// this.setState({ isFocus: true });
	};

	onClickPrevMonth = (e) => {
		const { curYear, curMonth } = this.state;
		let newMonth = curMonth - 1;
		if (newMonth >= 0) {
			this.setState({
				curMonth: newMonth
			});
		} else {
			this.setState({
				curYear: curYear - 1,
				curMonth: 11
			});
		}
	};

	onClickNextMonth = (e) => {
		const { curYear, curMonth } = this.state;
		let newMonth = curMonth + 1;
		if (newMonth <= 11) {
			this.setState({
				curMonth: newMonth
			});
		} else {
			this.setState({
				curYear: curYear + 1,
				curMonth: 0
			});
		}
	};

	setSelectedDays = (days) => {
		const { getSelectedDays } = this.props;
		getSelectedDays(days);
	};

	render() {
		const { config, selectedDays } = this.props;
		const { isFocus, today, curYear, curMonth } = this.state;
		return (
			<div className="date-picker" ref={this.datePickerRef}>
				<InputWrapper isFocus={isFocus} onClickInput={this.onClickInput} />
				<CalendarWrapper
					isFocus={isFocus}
					today={today}
					curYear={curYear}
					curMonth={curMonth}
					onClickPrevMonth={this.onClickPrevMonth}
					onClickNextMonth={this.onClickNextMonth}
					config={config}
					setSelectedDays={this.setSelectedDays}
					selectedDays={selectedDays}
				/>
			</div>
		);
	}
}

export default onClickOutside(DatePicker);
