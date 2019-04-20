import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logs from './Logs';

const LogListContainer = styled('div')`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: min-content max-content auto;
	grid-gap: 50px;
`;

const Stats = styled('div')`
	display: grid;
	grid-template-columns: 1fr 1fr 2fr;
`;

const Stat = styled('span')`
	color: var(--primary);
`;

const Title = styled('span')`
	font-size: 1.5rem;
`;
class LogList extends Component {
	render() {
		return (
			<LogListContainer>
				<Stats>
					<Stat>
						<FontAwesomeIcon icon='list-ol' /> total log count: 12
					</Stat>
					<Stat>
						<FontAwesomeIcon icon='edit' />
						edited logs: 12
					</Stat>
					<Stat>
						<FontAwesomeIcon icon='sort-amount-up' />
						most logged day: April 22, 1996 (45 logs)
					</Stat>
				</Stats>
				<Title>all logs.</Title>
				<Logs />
			</LogListContainer>
		);
	}
}

export default LogList;
