import React, { Component } from 'react';
import styled from 'styled-components';

const LogInputContainer = styled('div')`
	display: grid;
	justify-self: center;
	grid-gap: 1em;
`;

const Title = styled('span')`
	font-size: 60px;
	color: var(--primary);
`;

const Cursive = styled(Title)`
	font-family: 'Meddon', cursive;
`;

const LogInputForm = styled('textArea')`
	font-size: 14px;
	padding: 10px;
	box-sizing: border-box;
	border: 1px solid #000000;
	resize: none;
	margin-top: 5%;
	font-family: 'Quicksand', sans-serif;
	background-color: #ffffff;
	&:focus {
		outline: none !important;
		border: 1px dashed var(--primary);
	}
`;

const Submit = styled('button')`
	color: #ffffff;
	font-size: 1.25rem;
	background: var(--primary);
	padding: 5px 20px;
	border: 1px solid #fff;
	cursor: pointer;
	&:focus {
		outline: 0;
	}
	&:hover {
		color: var(--primary);
		background: #fff;
		border: 1px solid var(--primary);
		font-weight: 700;
	}
`;

class LogInput extends Component {
	render() {
		return (
			<LogInputContainer>
				<Title>
					log<Cursive>it!</Cursive>
				</Title>
				<LogInputForm
					rows='15'
					cols='50'
					placeholder='Hello, start writing...'
				/>
				<Submit disabled> write log. </Submit>
			</LogInputContainer>
		);
	}
}

export default LogInput;
