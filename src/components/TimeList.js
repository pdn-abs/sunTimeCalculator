import { React } from 'react';
import { map } from '@laufire/utils/collection';
import Time from './Time';

const TimeList = (context) => {
	const { config: { timeNameList }} = context;

	return <div>
		{map(timeNameList, (time, id) =>
			<Time { ...{ ...context, data: { time, id }} }/>)}
	</div>;
};

export default TimeList;
