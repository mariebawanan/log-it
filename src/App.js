import React, { Component } from 'react';
import './App.css';
import LogsMainContainer from './components/LogsMainContainer/LogsMainContainer';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faListOl,
	faEdit,
	faSortAmountUp,
	faTrash
} from '@fortawesome/free-solid-svg-icons';

library.add(faListOl, faEdit, faSortAmountUp, faTrash);

class App extends Component {
	render() {
		return <LogsMainContainer />;
	}
}

export default App;
