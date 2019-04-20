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

const Stat = styled('span')``;

const Label = styled('span')`
	color: var(--label);
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
						<Label>
							<FontAwesomeIcon icon='list-ol' /> total log count:
						</Label>{' '}
						12
					</Stat>
					<Stat>
						<Label>
							<FontAwesomeIcon icon='edit' />
							edited logs:
						</Label>{' '}
						12
					</Stat>
					<Stat>
						<Label>
							<FontAwesomeIcon icon='sort-amount-up' />
							most logged day:
						</Label>{' '}
						April 22, 1996 (45 logs)
					</Stat>
				</Stats>
				<Title>all logs.</Title>
				<Logs />
			</LogListContainer>
		);
	}
}

export default LogList;
