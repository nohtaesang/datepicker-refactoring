import React, { Component } from 'react';
import Day from './Day';

const Week = (props) => {
	const { days, curMonth, pickerType, inRangeMarkings, setSelectedDays, selectedDays } = props;

	const getDay = () => {
		return days.map((day, i) => (
			<Day
				key={i}
				day={day}
				curMonth={curMonth}
				pickerType={pickerType}
				inRangeMarkings={inRangeMarkings}
				setSelectedDays={setSelectedDays}
				selectedDays={selectedDays}
			/>
		));
	};

	return <div className="week">{getDay()}</div>;
};

export default Week;
