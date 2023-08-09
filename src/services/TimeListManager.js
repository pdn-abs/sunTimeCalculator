import SunCalc from 'suncalc';

const TimeListManager = {
	getTimeList: (context) => {
		const { state: { latitude, longitude }} = context;

		return	(
			SunCalc.getTimes(
			// eslint-disable-next-line no-magic-numbers
				new Date(), latitude, longitude, 0
			)
		);
	},

};

export default TimeListManager;
