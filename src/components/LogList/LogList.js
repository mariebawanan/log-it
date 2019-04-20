import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { firebaseLogs, firebaseLooper } from '../../firebase';

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
	state = {
		logs: [],
		totalLogCount: 0,
		editedLogs: 0,
		mostLoggedDay: '',
		mostLoggedDayCount: 0
	};

	retrieveLogs = () => {
		firebaseLogs
			.orderByChild('date')
			.once('value')
			.then(snapshot => {
				const logs = firebaseLooper(snapshot);
				console.log(logs);
				this.setState({
					logs
				});
			})
			.catch(e => {
				console.log(e);
			});
	};

	componentDidMount() {
		this.retrieveLogs();
	}

	render() {
		const { logs } = this.state;
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
				<Logs logs={logs} />
			</LogListContainer>
		);
	}
}

export default LogList;
