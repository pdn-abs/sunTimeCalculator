import { React } from 'react';
import { map, values } from '@laufire/utils/collection';
import Time from './Time';

const TimeList = (context) => {
	const { state: { timeList }} = context;

	return <div>
		{map(values(timeList), (time, id) =>
			<Time { ...{ ...context, data: { time, id }} }/>)}
	</div>;
};

export default TimeList;
