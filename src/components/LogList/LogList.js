import React, { Component } from 'react';
import styled from 'styled-components';
import { firebaseLogs, firebaseLooper } from '../../firebase';

import LogItem from './LogItem';

const LogListContainer = styled('div')`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: min-content max-content auto;
	grid-gap: 50px;
`;

const LogsContainer = styled('div')`
	display: grid;
	grid-gap: 2rem;
`;

const Stats = styled('div')`
	display: grid;
	grid-template-columns: 4fr 4fr;
`;

const Count = styled('span')`
	justify-self: end;
`;

const Label = styled('span')`
	color: var(--label);
`;
const Title = styled('span')`
	font-size: 1.5rem;
`;

class LogList extends Component {
	state = {
		logs: [],
		totalLogCount: 0
	};

	componentDidMount() {
		this.retrieveLogs();
		this.addLogListener();
		this.deleteLogListener();
		this.editLogListener();
	}

	retrieveLogs = () => {
		firebaseLogs
			.orderByChild('date')
			.once('value')
			.then(snapshot => {
				const logs = firebaseLooper(snapshot);
				this.setState({
					logs
				});
			})
			.catch(e => {
				console.log(e);
			});
	};

	renderLogs = logs =>
		logs.map((log, i) => <LogItem key={i} log={log} />).reverse();

	addLogListener = () => {
		firebaseLogs.on('child_added', () => {
			this.retrieveLogs();
		});
	};

	deleteLogListener = () => {
		firebaseLogs.on('child_removed', () => {
			this.retrieveLogs();
		});
	};

	editLogListener = () => {
		firebaseLogs.on('child_changed', () => {
			this.retrieveLogs();
		});
	};

	render() {
		const { logs } = this.state;
		return (
			<LogListContainer>
				<Stats>
					{logs.length ? (
						<Title>all logs.</Title>
					) : (
						<Title>no logs. write one!</Title>
					)}
					<Count>
						<Label>total log count:</Label>
						{` ${logs.length}`}
					</Count>
				</Stats>

				<LogsContainer>{this.renderLogs(logs)}</LogsContainer>
			</LogListContainer>
		);
	}
}

export default LogList;
