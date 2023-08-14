import { React, useEffect } from 'react';
import './App.scss';
import LatitudeInput from './components/LatitudeInput';
import LongitudeInput from './components/LongitudeInput';
import CalculateButton from './components/CalculateButton';
import TimeList from './components/TimeList';
import SunTimeTable from './components/SunTimeTable';

const App = (context) => {
	const { actions: { setSunTimesOfPlaces }} = context;

	useEffect(() => setSunTimesOfPlaces(context), []);

	return <div className="App">
		<LatitudeInput { ...context }/>
		<LongitudeInput { ...context }/>
		<CalculateButton { ...context }/>
		<TimeList { ...context }/>
		<SunTimeTable { ...context }/>
	</div>;
};

export default App;
