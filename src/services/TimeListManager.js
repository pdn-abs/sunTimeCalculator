import SunCalc from 'suncalc';

const TimeListManager = {
	getTimeList: () => {
		const latitude = 13.0827;
		const longitude = 80.2707;

		return	(
			SunCalc.getTimes(
			// eslint-disable-next-line no-magic-numbers
				new Date(), latitude, longitude, 0
			)
		);
	},

};

export default TimeListManager;
