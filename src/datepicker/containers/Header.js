import React, { Component } from 'react';
import NavigationBtn from '../components/header/NavigationBtn';
import CurMonth from '../components/header/CurMonth';

class Header extends Component {
	constructor(props) {
		super();
	}

	render() {
		const { curYear, curMonth, onClickPrevMonth, onClickNextMonth } = this.props;
		return (
			<div className="header">
				<div className="navigation">
					<NavigationBtn dir="prev" onClickBtn={onClickPrevMonth} />
					<CurMonth year={curYear} month={curMonth} />
					<NavigationBtn dir="next" onClickBtn={onClickNextMonth} />
				</div>
			</div>
		);
	}
}

export default Header;
