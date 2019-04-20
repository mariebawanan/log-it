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

const ErrorMessage = styled.span`
	color: #fc361d;
	font-size: 12px;
	margin-left: 20px;
	font-weight: 700;
`;

class LogInput extends Component {
	state = {
		logContent: '',
		errorMessage: ''
	};

	setError = () => {
		this.setState({ errorMessage: 'you have to write something.' });
	};

	clearError = () => {
		this.setState({ errorMessage: '' });
	};

	isInputValid = ({ logContent }) => {
		logContent = logContent.replace(/\s/g, '');
		return logContent;
	};

	handleLogInput = event => {
		let logContent = event.target.value;
		this.setState({ logContent }, () => {
			if (!this.isInputValid(this.state)) this.setError();
			else this.clearError();
		});
	};

	render() {
		const { logContent, errorMessage } = this.state;
		return (
			<LogInputContainer>
				<Title>
					log<Cursive>it!</Cursive>
				</Title>
				<LogInputForm
					rows='15'
					cols='50'
					placeholder='Hello, start writing...'
					value={logContent}
					onChange={this.handleLogInput}
					onBlur={this.clearError}
				/>
				<Submit onClick={this.handleSubmit}> write log. </Submit>
				<ErrorMessage>{errorMessage}</ErrorMessage>
			</LogInputContainer>
		);
	}
}

export default LogInput;
