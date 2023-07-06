import React, { useContext } from 'react'
import { NumberContext } from '../../NumberProvider';

const NumberButton = ({buttonValue}) => {
	const { handleSetScreenValue } = useContext(NumberContext);
  		return (
			<div type='button' onClick={() => handleSetScreenValue(buttonValue)}>
				{buttonValue}
			</div>
		)
}

export default NumberButton;