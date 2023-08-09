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
const actions = {
	setLatInput,
	setLngInput,
	setCoordinates,

};

export default actions;
