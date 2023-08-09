import { React } from 'react';

const CalculateButton = (context) => {
	const { actions } = context;

	return (
		<button
			onClick={ () => { actions.setCoordinates(); } }
		>
			Calculate
		</button>
	);
};

export default CalculateButton;
