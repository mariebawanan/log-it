import React, { Component } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import Alert from 'react-s-alert';

import { firebase, firebaseLogs } from '../../firebase';

const EditModal = styled(ReactModal)`
	position: absolute;
	outline: none !important;

	@media (max-width: 800px) {
		width: 100%;
	}
`;

const LogInputContainer = styled('div')`
	display: grid;
	justify-self: center;
	grid-gap: 1em;
	max-height: auto;
`;

const LogInputForm = styled('textarea')`
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

const ErrorMessage = styled.span`
	color: #fc361d;
	font-size: 1rem;
	font-weight: 500;
`;

const ModalButton = styled.button`
	color: #ffffff;
	font-size: 15px;
	font-weight: 500;
	background: #6acccb;
	padding: 5px 20px;
	border: 1px solid #fff;
	margin-top: 2%;
	cursor: pointer;
	&:focus {
		outline: 0;
	}
`;

const CancelModal = styled(ModalButton)`
	background: #999999;
	margin-left: 2%;
	:hover {
		background: #fff;
		color: #999999;
		border: 1px solid #999999;
	}
`;

const EditButtonModal = styled(ModalButton)`
	:hover {
		color: #6acccb;
		background: #fff;
		border: 1px solid #6acccb;
		font-weight: 500;
	}
`;

const webStyle = {
	overlay: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(239, 239, 239, 0.8)'
	},
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		padding: '20px',
		overflow: 'hidden',
		maxWidth: '400px',
		transform: 'translate(-50%, -50%)'
	}
};

const Title = styled('span')`
	font-size: 1.5rem;
`;

const ButtonsContainer = styled('div')`
	display: grid;
	grid-template-columns: 2fr 2fr;
`;

class EditLogModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: this.props.showModal,
			logContent: this.props.log.content,
			errorMessage: ' '
		};
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			logContent: nextProps.log.content,
			showModal: nextProps.showModal
		});
	}
	handleCloseModal() {
		this.setState({ showModal: false, errorMessage: '' });
		this.props.closeModal();
	}

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

	editLog = ({ logContent }) => {
		const { content, id } = this.props.log;
		if (logContent === content) {
			this.handleCloseModal();
		} else {
			var newLogData = {
				content: logContent,
				lastEdit: firebase.database.ServerValue.TIMESTAMP
			};
			firebaseLogs
				.child(`${id}`)
				.update(newLogData)
				.then(() => {
					this.handleCloseModal();
					Alert.info('Log edited!', {
						position: 'top-right',
						effect: 'flip',
						timeout: 2000
					});
				});
		}
	};

	submitEditLog = () => {
		if (this.isInputValid(this.state)) {
			this.editLog(this.state);
		} else {
			this.setError();
		}
	};

	render() {
		const { showModal, logContent, errorMessage } = this.state;
		return (
			<EditModal
				isOpen={showModal}
				ariaHideApp={false}
				contentLabel='Edit Log'
				style={webStyle}
				onRequestClose={this.handleCloseModal}
				shouldCloseOnOverlayClick={true}
			>
				<Title>edit this log.</Title>
				<LogInputContainer>
					<LogInputForm
						rows='15'
						cols='50'
						placeholder='Hello, start writing...'
						value={logContent}
						onChange={this.handleLogInput}
						onBlur={this.clearError}
					/>
					<ButtonsContainer>
						<EditButtonModal className='editModal' onClick={this.submitEditLog}>
							edit log
						</EditButtonModal>
						<CancelModal className='closeModal' onClick={this.handleCloseModal}>
							cancel
						</CancelModal>
					</ButtonsContainer>
					<ErrorMessage>{errorMessage}</ErrorMessage>
				</LogInputContainer>
			</EditModal>
		);
	}
}

export default EditLogModal;
