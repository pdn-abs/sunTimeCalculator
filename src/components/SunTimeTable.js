import { map, values } from '@laufire/utils/collection';
import { peek } from '@laufire/utils/debug';
import { React } from 'react';

// eslint-disable-next-line max-lines-per-function
const SunTimeTable = (context) => {
	const { state: { sunTimesOfPlaces }, config: { timeNameList }} = context;

	peek(sunTimesOfPlaces);
	return (
		<table border="1px" align="center">
			<tr>
				<th> place</th>
				{
					map(timeNameList, (data, key) =>
						<th key={ key }>
							<pre>{data}</pre>
						</th>)
				}
			</tr>
			{
				sunTimesOfPlaces.map((location, index) =>
					<tr key={ index }>
						{
							map(values(location), (data, key) =>
								<th key={ key }>
									<pre>{data}</pre>
								</th>)
						}
					</tr>)
			}
		</table>
	);
};

export default SunTimeTable;
