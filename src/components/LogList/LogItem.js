import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Alert from 'react-s-alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { firebaseLogs } from '../../firebase';

import EditLogModal from './EditLogModal';

const LogContainer = styled('div')`
	grid-gap: 1rem;
	display: grid;
	border-bottom: 1px dashed var(--primary);
	padding-bottom: 1rem;
`;

const UtilContainer = styled('div')`
	display: grid;
	grid-template-columns: 5fr 2fr;
	font-size: 0.75rem;
	color: var(--label);
`;

const Text = styled('span')`
	white-space: pre-line;
`;

const Action = styled('span')`
	font-size: 14px;
	color: var(--label);
	background: transparent;
	border: none;
	&:hover {
		cursor: pointer;
	}

	&:focus {
		outline: 0;
	}

	.edit {
		&:hover {
			color: var(--primary);
		}
	}
	.delete {
		&:hover {
			color: var(--error);
		}
	}
`;

const ButtonsContainer = styled('div')`
	display: grid;
	justify-self: end;
	grid-template-columns: 1fr 1fr;
	grid-gap: 0.75rem;
	font-size: 1.5rem;
`;

class LogItem extends Component {
	state = {
		showModal: false
	};
	displayDates = log => {
		const posted = moment(log.date).format('MMM DD YYYY •  hh:mm a');
		const edited = `${
			log.lastEdit
				? `// last edit: ${moment(log.lastEdit).format(
						'MMM DD YYYY •  hh:mm a'
				  )}`
				: ''
		}`;
		return `${posted} ${edited}`;
	};

	deleteLog = () => {
		const id = this.props.log.id;
		firebaseLogs
			.child(`${id}`)
			.remove()
			.then(() => {
				Alert.warning('Log deleted!', {
					position: 'top-right',
					effect: 'flip',
					timeout: 2000
				});
			});
	};

	editLog = () => {
		this.setState({ showModal: true });
	};

	handleCloseModal = () => {
		this.setState({ showModal: false });
	};
	render() {
		const { log } = this.props;
		const { showModal } = this.state;
		return (
			<LogContainer>
				<UtilContainer>
					<Text>{this.displayDates(log)} </Text>
					<ButtonsContainer>
						<Action onClick={this.editLog}>
							<FontAwesomeIcon className='edit' icon='edit' />
						</Action>
						<Action onClick={this.deleteLog}>
							<FontAwesomeIcon className='delete' icon='trash' />
						</Action>
					</ButtonsContainer>
				</UtilContainer>
				<Text>{log.content}</Text>

				<EditLogModal
					log={log}
					showModal={showModal}
					closeModal={this.handleCloseModal}
				/>
			</LogContainer>
		);
	}
}

export default LogItem;
