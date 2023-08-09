import { React } from 'react';

const LongitudeInput = (context) => {
	const { state: { longitude }, actions } = context;

	return <span>
		<label>Longitude</label>
		<input
			inputMode="numeric"
			value={ longitude }
			onChange={ (evt) => actions.setLngInput(evt.target.value) }
		/>
	</span>;
};

export default LongitudeInput;
