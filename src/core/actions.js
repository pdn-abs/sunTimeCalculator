import TimeListManager from '../services/TimeListManager';

const setLatInput = ({ data: latitude }) => ({
	latitude,
});
const setLngInput = ({ data: longitude }) => ({
	longitude,
});
const setCoordinates = (context) => ({
	timeList: TimeListManager.getTimeList(context),
});
const setSunTimesOfPlaces = (context) => ({
	sunTimesOfPlaces: TimeListManager.getSunTimesOfPlaces(context),
});
const actions = {
	setLatInput,
	setLngInput,
	setCoordinates,
	setSunTimesOfPlaces,

};

export default actions;
