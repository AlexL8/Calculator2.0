import React, { useContext } from 'react';
import { NumberContext } from '../../NumberProvider';

const buttonStyle = {
	background: 'orange',
};

const BackButton = () => {
	const { handleBackButton } = useContext(NumberContext);
	return (
	  <div style={buttonStyle} type='button' onClick={() => handleBackButton()}>C</div>
	)
}

export default BackButton;