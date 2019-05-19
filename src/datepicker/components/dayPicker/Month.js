import React from 'react';
import Week from './Week';
import { getMonthlyCalendar } from '../utils/monthUtil';
import { getRangeMarkings } from '../utils/markingUtil';

const Month = (props) => {
	const { curYear, curMonth, pickerType, markings, setSelectedDays, selectedDays } = props;

	const getWeeks = () => {
		const days = getDays(curYear, curMonth);
		const row = days.length;
		if (row === 0) return;
		const inRangeMarkings = getRangeMarkings(markings, days[0], days[days.length - 1]);

		const weeks = [];
		for (let i = 0; i < row; i++) {
			weeks.push(
				<Week
					key={i}
					days={days.slice(i * 7, i * 7 + 7)}
					curMonth={curMonth}
					pickerType={pickerType}
					inRangeMarkings={inRangeMarkings}
					setSelectedDays={setSelectedDays}
					selectedDays={selectedDays}
				/>
			);
		}
		return weeks;
	};

	const getDays = () => {
		if (!curYear) return [];
		return getMonthlyCalendar(new Date(curYear, curMonth, 1));
	};

	return <div className="month">{getWeeks(curYear, curMonth)}</div>;
};

export default Month;
