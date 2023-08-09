import { React } from 'react';

const LatitudeInput = (context) => {
	const { state: { latitude }, actions } = context;

	return <span>
		<label>Latitude</label>
		<input
			inputMode="numeric"
			value={ latitude }
			onChange={ (evt) => actions.setLatInput(evt.target.value) }
		/>
	</span>;
};

export default LatitudeInput;
