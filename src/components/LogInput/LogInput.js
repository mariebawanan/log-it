import React, { Component } from 'react';
import styled from 'styled-components';
import Alert from 'react-s-alert';

import { firebase, firebaseLogs } from '../../firebase';

const LogInputContainer = styled('div')`
	display: grid;
	justify-self: center;
	grid-gap: 1em;
	max-height: 100px;

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
		justify-self: stretch;
	}
`;

const Title = styled('span')`
	font-size: 60px;
	color: var(--primary);
`;

const Cursive = styled(Title)`
	font-family: 'Meddon', cursive;
`;

const LogInputForm = styled('textarea')`
	font-size: 14px;
	padding: 10px;
	box-sizing: border-box;
	border: 1px solid var(--black);
	resize: none;
	margin-top: 5%;
	background-color: var(--white);
	&:focus {
		outline: none !important;
		border: 1px dashed var(--primary);
	}
`;

const Submit = styled('button')`
	color: var(--white);
	font-size: 1.25rem;
	background: var(--primary);
	padding: 5px 20px;
	border: 1px solid var(--white);
	cursor: pointer;
	&:focus {
		outline: 0;
	}
	&:hover {
		color: var(--primary);
		background: var(--white);
		border: 1px solid var(--primary);
		font-weight: 700;
	}
`;

const ErrorMessage = styled.span`
	color: var(--error);
	font-size: 1rem;
	font-weight: 500;
`;

class LogInput extends Component {
	state = {
		logContent: '',
		errorMessage: ''
	};

	setError = () => {
		this.setState({ errorMessage: 'ooops! you have to write something...' });
	};

	clearError = () => {
		this.setState({ errorMessage: '' });
	};

	isInputValid = ({ logContent }) => logContent.replace(/\s/g, '');

	handleLogInput = event => {
		let logContent = event.target.value;
		this.setState({ logContent }, () => {
			if (!this.isInputValid(this.state)) this.setError();
			else this.clearError();
		});
	};

	handleSubmit = event => {
		event.preventDefault();

		if (this.isInputValid(this.state)) {
			this.addLog(this.state);
		} else {
			this.setError();
		}
	};

	addLog = ({ logContent }) => {
		let dataToSubmit = {};
		dataToSubmit['date'] = firebase.database.ServerValue.TIMESTAMP;
		dataToSubmit['content'] = logContent;

		firebaseLogs
			.push(dataToSubmit)
			.then(() => {
				this.setState({ logContent: '' });
				Alert.success('Log added!', {
					position: 'top-right',
					effect: 'flip',
					timeout: 2000
				});
			})
			.catch(e => {
				this.setState({
					errorMessage: e.message
				});
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
				<Alert stack={{ limit: 3 }} />
			</LogInputContainer>
		);
	}
}

export default LogInput;
