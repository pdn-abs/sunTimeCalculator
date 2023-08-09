import { React } from 'react';
import './App.scss';
import TimeList from './components/TimeList';

const App = (context) =>
	<div className="App">

		<TimeList { ...context }/>
	</div>;

export default App;
