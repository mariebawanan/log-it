import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

const Text = styled('span')``;

const ButtonsContainer = styled('span')`
	display: grid;
	justify-self: end;
	grid-template-columns: 1fr 1fr;
	grid-gap: 0.75rem;
	font-size: 1rem;
`;

const LogItem = ({ log }) => {
	const displayDates = log => {
		console.log(log);
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

	return (
		<LogContainer>
			<UtilContainer>
				<Text>{displayDates(log)} </Text>
				<ButtonsContainer>
					<FontAwesomeIcon icon='edit' />
					<FontAwesomeIcon icon='trash' />
				</ButtonsContainer>
			</UtilContainer>
			<Text>{log.content}</Text>
		</LogContainer>
	);
};

export default LogItem;
