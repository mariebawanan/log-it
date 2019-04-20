import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LogsContainer = styled('div')`
	display: grid;
	grid-gap: 2rem;
`;

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

const Logs = ({ logs }) => {
	const renderLogs = () =>
		logs.map(log => (
			<LogContainer>
				<UtilContainer>
					<Text>{log.date} Edited: April 12, 2019 </Text>
					<ButtonsContainer>
						<FontAwesomeIcon icon='edit' />
						<FontAwesomeIcon icon='trash' />
					</ButtonsContainer>
				</UtilContainer>

				<Text>{log.content}</Text>
			</LogContainer>
		));
	return <LogsContainer>{renderLogs()}</LogsContainer>;
};

export default Logs;
