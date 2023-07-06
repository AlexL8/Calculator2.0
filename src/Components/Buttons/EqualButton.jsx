import React, { useContext } from 'react'
import { NumberContext } from '../../NumberProvider';

const EqualButton = ({buttonValue}) => {
	const { doMath } = useContext(NumberContext);
	return (
	  <div type='button' onClick={() => doMath()}>
		  {buttonValue}
	  </div>
	)
}

export default EqualButton;