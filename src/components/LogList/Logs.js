import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LogsContainer = styled('div')`
	display: grid;
	grid-gap: 2rem;
`;

const LogContainer = styled('div')`
	grid-gap: 1.5rem;
	display: grid;
	border-bottom: 1px dashed var(--primary);
	padding-bottom: 1rem;
`;

const UtilContainer = styled('div')`
	display: grid;
	grid-template-columns: 5fr 5fr;
	font-size: 0.75rem;
`;

const Text = styled('span')``;

const ButtonsContainer = styled('span')`
	display: grid;
	justify-self: end;
	grid-template-columns: 1fr 1fr;
	grid-gap: 0.75rem;
	font-size: 1rem;
`;

const Logs = () => {
	const renderLogs = () => (
		<>
			<LogContainer>
				<UtilContainer>
					<Text>April 12, 2019 Edited: April 12, 2019 </Text>
					<ButtonsContainer>
						<FontAwesomeIcon icon='edit' />
						<FontAwesomeIcon icon='trash' />
					</ButtonsContainer>
				</UtilContainer>

				<Text>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</Text>
			</LogContainer>

			<LogContainer>
				<UtilContainer>
					<Text>April 12, 2019 Edited: April 12, 2019 </Text>
					<ButtonsContainer>
						<FontAwesomeIcon icon='edit' />
						<FontAwesomeIcon icon='trash' />
					</ButtonsContainer>
				</UtilContainer>

				<Text>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.
				</Text>
			</LogContainer>
		</>
	);
	return <LogsContainer>{renderLogs()}</LogsContainer>;
};

export default Logs;
