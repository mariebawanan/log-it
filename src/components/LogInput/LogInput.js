import React, { Component } from 'react';
import styled from 'styled-components';

const LogInputContainer = styled('div')`
	grid-area: 'LogInput';
	grid-column: 1/2;
	border: 1px solid var(--primary);
`;

const Title = styled('h1')`
	color: var(--primary);
`;

const LogInputForm = styled('input')`
	color: var(--black);
`;

const Submit = styled('button')`
	color: var(--primary);
`;

class LogInput extends Component {
	render() {
		return (
			<LogInputContainer>
				<Title>logit!</Title>
				<LogInputForm placeholder='Hello, start writing...' />
				<Submit> write log. </Submit>
			</LogInputContainer>
		);
	}
}

export default LogInput;
