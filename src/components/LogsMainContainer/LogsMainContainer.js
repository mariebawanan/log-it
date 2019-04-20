import React from 'react';
import styled from 'styled-components';

import LogInput from '../LogInput/LogInput';
import LogList from '../LogList/LogList';

const MainContainer = styled('div')`
	display: grid;
	grid-template-areas:
		'LogInput LogList'
		'LogInput LogList';
	background-color: #dfdfdf;
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
