import React, { Component } from 'react';
import styled from 'styled-components';

import Logs from './Logs';

const LogListContainer = styled('div')`
	background-color: #dfdfdf;
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: min-content max-content auto;
	grid-gap: 50px;
`;

const Stats = styled('div')`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
`;

const Stat = styled('span')`
	color: var(--primary);
`;

class LogList extends Component {
	render() {
		return (
			<LogListContainer>
				<Stats>
					<Stat>total log count: 12</Stat>
					<Stat>total log count: 12</Stat>
					<Stat>total log count: 12</Stat>
					<Stat>total log count: 12</Stat>
				</Stats>
				<Logs />
			</LogListContainer>
		);
	}
}

export default LogList;
