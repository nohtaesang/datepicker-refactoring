import { isAfter } from './dateUtil';

export const getMonthlyCalendar = (date) => {
	const _year = date.getFullYear();
	const _month = date.getMonth();
	const _first = getFirstDateInMonthlyCalendar(_year, _month);
	const _last = getLastDateInMonthlyCalendar(_year, _month);
	return getDateArrInRange(_first, _last);
};
const getFirstDateInMonthlyCalendar = (y, m) => {
	const day = new Date(y, m, 1).getDay();
	return new Date(y, m, 1 - day);
};
const getLastDateInMonthlyCalendar = (y, m) => {
	const day = new Date(y, m + 1, 0).getDay();
	return day === 6 ? new Date(y, m + 1, 0) : new Date(y, m + 1, 6 - day);
};
const getDateArrInRange = (first, last) => {
	let arr = [];
	let temp = new Date(first);
	while (!isAfter(temp, last)) {
		arr.push(temp);
		temp = new Date(temp.getFullYear(), temp.getMonth(), temp.getDate() + 1);
	}
	return arr;
};
