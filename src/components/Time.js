import { React } from 'react';

const Time = (context) => {
	const { state: { timeList }, data: { time, id }} = context;
	// eslint-disable-next-line no-magic-numbers
	const value = timeList[time].toString().substr(16, 9);

	return (
		<div key={ id } className="sunTimes">
			<pre>{`${ time } : ${ value }`}</pre>
		</div>
	);
};

export default Time;
