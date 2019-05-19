import React, { Component } from 'react';

class InputWrapper extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { onClickInput } = this.props;
		return (
			<div className="input-wrapper">
				<input onClick={onClickInput} />
			</div>
		);
	}
}

export default InputWrapper;
