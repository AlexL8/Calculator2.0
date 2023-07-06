import React, { useContext } from 'react'
import { NumberContext } from '../../NumberProvider';

const buttonStyle = {
	background: 'orange',
};

const FunctionButton = ({buttonValue}) => {
	const { handleSetCalcFunction } = useContext(NumberContext);
	return (
	  <div style={buttonStyle} type='button' onClick={() => handleSetCalcFunction(buttonValue)}>
		  {buttonValue}
	  </div>
  )
}

export default FunctionButton;