import React from 'react';
import styled from 'styled-components';

import LogInput from '../LogInput/LogInput';
import LogList from '../LogList/LogList';

const MainContainer = styled('div')`
	display: grid;
	grid-template-columns: 4fr 5fr 1fr;
	grid-gap: 1rem;
	margin: 2rem;
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
