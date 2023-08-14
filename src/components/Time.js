import { React } from 'react';

const Time = (context) => {
	const { data: { time, id }} = context;

	return (
		<div key={ id } className="sunTimes">
			<pre>{ time }</pre>
		</div>
	);
};

export default Time;
