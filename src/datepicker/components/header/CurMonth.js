import React from 'react';

const CurMonth = (props) => {
	const { year, month } = props;
	const onClickCurMonth = () => {};
	return <div className="cur-month" onClick={onClickCurMonth}>{`${year} ${month + 1}`}</div>;
};

export default CurMonth;
