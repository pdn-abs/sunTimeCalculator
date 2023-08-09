import { React } from 'react';
import TimeListManager from '../services/TimeListManager';

const Time = (context) => {
	const { data: { time, id }} = context;
	const timeList = TimeListManager.getTimeList();
	const value = timeList[time].toString();

	return (
		<div key={ id } className="sunTimes">
			<pre>{`${ time } : ${ value }`}</pre>
		</div>
	);
};

export default Time;
