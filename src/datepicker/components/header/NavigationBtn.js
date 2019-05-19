import React from 'react';

const NavigationBtn = (props) => {
	const { dir, onClickBtn } = props;

	const arrow = dir === 'prev' ? <div> {'<'} </div> : <div> {'>'} </div>;

	return (
		<div className="navigation-btn" onClick={onClickBtn}>
			{arrow}
		</div>
	);
};

export default NavigationBtn;
