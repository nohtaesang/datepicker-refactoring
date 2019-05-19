import React from 'react';
import { isEqual, isAfter } from '../utils/dateUtil';
const Day = (props) => {
	const { day, curMonth, pickerType, inRangeMarkings, setSelectedDays, selectedDays } = props;

	const onClickDay = (e) => {
		if (pickerType === 'one-day') {
			setSelectedDays(day);
		} else if (pickerType === 'multi-day') {
			// 같은날 클릭 = 제거
			// 다른날 클릭 = 추가
			let index = selectedDays.findIndex((d) => isEqual(d, day));
			const nextSelectedDays = selectedDays.slice();
			index === -1 ? nextSelectedDays.push(day) : nextSelectedDays.splice(index, 1);
			setSelectedDays(nextSelectedDays);
		} else if (pickerType === 'range-day') {
			let length = selectedDays.length;
			if (length === 0) {
				setSelectedDays(selectedDays.concat(day));
			} else if (length === 1) {
				if (isEqual(selectedDays[0], day)) {
					setSelectedDays([]);
				} else if (isAfter(selectedDays[0], day)) {
					setSelectedDays([ day, selectedDays[0] ]);
				} else {
					setSelectedDays(selectedDays.concat(day));
				}
			} else if (length === 2) {
				setSelectedDays([ day ]);
			}
		}
	};

	const getSelectedDayStyle = () => {};

	const getDayDateStyle = () => {};

	const getDayDate = () => {
		return (
			<div className={`day-date ${day.getMonth() !== curMonth ? 'opa' : null} ${getDayDateStyle()}`}>
				{day.getDate()}
			</div>
		);
	};

	const getMarking = () => {
		const result = inRangeMarkings.map((marking, i) => {
			const { type } = marking;

			switch (type) {
				case 'one-date':
					if (isEqual(day, new Date(marking.date)))
						return (
							<div key={i} className={marking.className}>
								{marking.content}
							</div>
						);
					break;
				case 'static-day':
					if (day.getDay() === marking.day)
						return (
							<div key={i} className={marking.className}>
								{marking.content}
							</div>
						);
					break;
				case 'static-date':
					if (day.getDate() === marking.date)
						return (
							<div key={i} className={marking.className}>
								{marking.content}
							</div>
						);
					break;
				case 'range-date':
				case 'in-range-day':
				case 'in-range-date':
					break;
			}
		});
		// TODO:
		return result;
	};

	return (
		<div className={`day ${getSelectedDayStyle()}`} onClick={onClickDay}>
			{getDayDate()}
			{getMarking()}
		</div>
	);
};

export default Day;
