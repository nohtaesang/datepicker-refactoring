import { isAfter, isBefore } from './dateUtil';

export const getSortedMarkings = (markings) => {
	// const result = [];
	// markings.sort((a, b) => {
	// 	let aDate, bDate;
	// });
	// return result;
	return markings;
};

const getFirstDate = (marking) => {
	// const { type } = marking;
	// switch(type){
	// 	case 'one-day':
	// 	case 'infinite-day':
	// 	case 'infinite-date':
	// 	break;
	// 	case 'period-date':
	// 	case ''
	// }
};

export const getRangeMarkings = (markings, first, last) => {
	let result = [];
	const firstTime = first.getTime();
	const lastTime = last.getTime();

	result = markings.filter((marking) => isInRange(marking, firstTime, lastTime));
	return result;
};

const isInRange = (marking, first, last) => {
	const { type } = marking;
	let markingTime1, markingTime2;
	switch (type) {
		case 'one-date':
			markingTime1 = new Date(marking.date).getTime();
			if (markingTime1 >= first && markingTime1 <= last) return true;
			break;
		case 'static-day':
		case 'static-date':
			return true;
			break;
		case 'range-date':
		case 'in-range-day':
		case 'in-range-date':
			markingTime1 = new Date(marking.startDate).getTime();
			markingTime2 = new Date(marking.endDate).getTime();
			if (markingTime2 >= first && markingTime1 <= last) return true;
			break;
	}
	return false;
};
