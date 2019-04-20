import React from 'react';
import styled from 'styled-components';

const LogsContainer = styled('div')`
	display: grid;
	grid-gap: 2rem;
`;

const LogContainer = styled('div')`
	display: grid;
`;

const UtilContainer = styled('div')`
	display: grid;
	grid-template-columns: 5fr 5fr;
`;

const Text = styled('span')`
	color: var(--primary);
`;

const ButtonsContainer = styled('span')`
	display: grid;
	justify-self: end;
`;

const Logs = () => {
	const renderLogs = () => (
		<>
			<LogContainer>
				<UtilContainer>
					<Text>April 12, 2019 Edited: April 12, 2019 </Text>
					<ButtonsContainer>
						April 12, 2019 Edited: April 12, 2019
					</ButtonsContainer>
				</UtilContainer>

				<Text>HELLOOOOOOOOOO</Text>
			</LogContainer>

			<LogContainer>
				<UtilContainer>
					<Text>April 12, 2019 Edited: April 12, 2019 </Text>
					<ButtonsContainer>
						April 12, 2019 Edited: April 12, 2019
					</ButtonsContainer>
				</UtilContainer>

				<Text>HELLOOOOOOOOOO</Text>
			</LogContainer>

			<LogContainer>
				<UtilContainer>
					<Text>April 12, 2019 Edited: April 12, 2019 </Text>
					<ButtonsContainer>
						April 12, 2019 Edited: April 12, 2019
					</ButtonsContainer>
				</UtilContainer>

				<Text>HELLOOOOOOOOOO</Text>
			</LogContainer>
		</>
	);
	return <LogsContainer>{renderLogs()}</LogsContainer>;
};

export default Logs;
