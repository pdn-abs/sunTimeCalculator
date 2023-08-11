import { React, useEffect } from 'react';
import './App.scss';
import SunTimeTable from './components/SunTimeTable';

const App = (context) => {
	const { actions } = context;

	useEffect(() => actions.setSunTimesOfPlaces(context), []);

	return <div className="App">
		<SunTimeTable { ...context }/>
	</div>;
};

export default App;
