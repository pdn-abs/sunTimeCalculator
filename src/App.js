import { React } from 'react';
import './App.scss';
import LatitudeInput from './components/LatitudeInput';
import LongitudeInput from './components/LongitudeInput';
import CalculateButton from './components/CalculateButton';
import TimeList from './components/TimeList';

const App = (context) =>
	<div className="App">
		<LatitudeInput { ...context }/>
		<LongitudeInput { ...context }/>
		<CalculateButton { ...context }/>
		<TimeList { ...context }/>
	</div>;

export default App;
