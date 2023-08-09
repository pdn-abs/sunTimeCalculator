import { React } from 'react';

const Time = (context) => {
	const { state: { timeList }, data: { time, id }} = context;
	const value = timeList[time].toString();

	return (
		<div key={ id } className="sunTimes">
			<pre>{`${ time } : ${ value }`}</pre>
		</div>
	);
};

export default Time;
