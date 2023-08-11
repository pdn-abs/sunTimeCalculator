import { peek } from '@laufire/utils/debug';
import SunCalc from 'suncalc';

const TimeListManager = {
	getTimeList: (context) => {
		const { state: { latitude, longitude }} = context;

		return	TimeListManager.getCalculatedSunTimes({
			...context, latitude, longitude,
		});
	},
	getCalculatedSunTimes: (context) => {
		const { config: { timeNameList },
			data: { latitude, longitude }} = context;
		const sunTimes = SunCalc.getTimes(
			// eslint-disable-next-line no-magic-numbers
			new Date(), latitude, longitude, 0
		);
		const timeList = timeNameList.reduce((acc, curValue) => ({
			...acc,
			// eslint-disable-next-line no-magic-numbers
			[curValue]: sunTimes[curValue].toString().substr(16, 9),
		}), {});

		peek({ timeList });
		return timeList;
	},
	getSunTimesOfPlaces: (context) => {
		const { config: { locationData }} = context;

		return locationData.map((location) => ({
			place: location.place,
			...TimeListManager.getCalculatedSunTimes({
				...context, data: location,
			}),
		}))

		;
	},

};

export default TimeListManager;
