export const config = {
	// one-day, multi-day, period-day
	pickerType: 'range-day',
	markings: [
		// 1. 특정 일 one-date
		// date, className

		// 2. 특정 기간 range-date
		// startDate, endDate, className

		// 3. 요일 static-day
		// day (number), className

		// 4. 일 static-date
		// date (number), className

		// 5. 특정 기간 속 요일 in-range-day,
		// startDate, endDate, day, className

		// 6. 특정 기간 속 일 in-range-date
		// startDate, endDate, date, className
		{
			type: 'one-date',
			date: '2019/04/26',
			content: 'today',
			className: 'today'
		},
		{
			type: 'range-date',
			startDate: '2019/04/27',
			endDate: '2019/04/30',
			content: 'range',
			className: 'range'
		},
		{
			type: 'static-day',
			day: 0,
			content: null,
			className: 'sunday'
		},
		{
			type: 'static-date',
			date: 5,
			content: 'five',
			className: 'five'
		},
		{
			type: 'in-range-day',
			startDate: '2019/04/01',
			endDate: '2019/04/30',
			day: '1',
			className: 'monday'
		},
		{
			type: 'in-range-date',
			startDate: '2019/03/01',
			endDate: '2019/05/30',
			day: '4',
			className: 'four'
		}
	]
};
