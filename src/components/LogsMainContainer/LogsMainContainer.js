import React from 'react';
import styled from 'styled-components';

import LogInput from '../LogInput/LogInput';
import LogList from '../LogList/LogList';

const MainContainer = styled('div')`
	display: grid;
	grid-template-columns: 4fr 5fr 0.5fr;
	grid-gap: 1rem;
	margin: 2rem;

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`;

const LogsMainContainer = () => {
	return (
		<MainContainer>
			<LogInput />
			<LogList />
		</MainContainer>
	);
};

export default LogsMainContainer;
