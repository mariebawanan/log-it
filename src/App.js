import React, { Component } from 'react';
import './App.css';
import LogsMainContainer from './components/LogsMainContainer/LogsMainContainer';

import { library } from '@fortawesome/fontawesome-svg-core';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';

import {
	faListOl,
	faEdit,
	faSortAmountUp,
	faTrash
} from '@fortawesome/free-solid-svg-icons';

library.add(faListOl, faEdit, faSortAmountUp, faTrash);

class App extends Component {
	render() {
		return (
			<>
				<LogsMainContainer />
			</>
		);
	}
}

export default App;
