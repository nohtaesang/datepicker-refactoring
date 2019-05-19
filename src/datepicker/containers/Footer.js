import React, { Component } from 'react';
import FooterBtn from '../components/footer/FooterBtn';

class Footer extends Component {
	constructor(props) {
		super();
	}

	render() {
		return (
			<div className="footer">
				<FooterBtn type="cancel" />
				<FooterBtn type="select" />
			</div>
		);
	}
}

export default Footer;
