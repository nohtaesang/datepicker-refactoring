import React from 'react';

const FooterBtn = (props) => {
	const { type } = props;

	const onClickFooterBtn = (e) => {
		if (type === 'select') {
		} else if (type === 'cancel') {
		}
	};

	return (
		<div className={`footer-btn ${type}`} onClick={onClickFooterBtn}>
			{type}
		</div>
	);
};

export default FooterBtn;
