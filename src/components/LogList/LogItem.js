import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Alert from 'react-s-alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { firebaseLogs } from '../../firebase';

const LogContainer = styled('div')`
	grid-gap: 1rem;
	display: grid;
	border-bottom: 1px dashed var(--primary);
	padding-bottom: 1rem;
`;

const UtilContainer = styled('div')`
	display: grid;
	grid-template-columns: 5fr 5fr;
	font-size: 0.75rem;
	color: var(--label);
`;

const Text = styled('span')`
	white-space: pre-line;
`;

const ButtonsContainer = styled('span')`
	display: grid;
	justify-self: end;
	grid-template-columns: 1fr 1fr;
	grid-gap: 0.75rem;
	font-size: 1rem;
`;

const LogItem = ({ log }) => {
	const displayDates = log => {
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

	const deleteLog = () => {
		const id = log.id;
		firebaseLogs
			.child(`${id}`)
			.remove()
			.then(() => {
				Alert.warning('Log deleted!', {
					position: 'top-right',
					timeout: 2000
				});
			});
	};

	return (
		<LogContainer>
			<UtilContainer>
				<Text>{displayDates(log)} </Text>
				<ButtonsContainer>
					<Text>
						<FontAwesomeIcon icon='edit' />
					</Text>
					<Text onClick={deleteLog}>
						<FontAwesomeIcon icon='trash' />
					</Text>
				</ButtonsContainer>
			</UtilContainer>
			<Text>{log.content}</Text>
		</LogContainer>
	);
};

export default LogItem;
