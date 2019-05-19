export const isAfter = (d1, d2) => {
	return d1.getTime() > d2.getTime();
};
export const isBefore = (d1, d2) => {
	return d1.getTime() < d2.getTime();
};

export const isRange = (d1, d2, target) => {};

export const isEqual = (d1, d2) => {
	return d1.getTime() === d2.getTime();
};
