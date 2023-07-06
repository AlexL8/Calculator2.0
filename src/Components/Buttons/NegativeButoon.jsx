import React, { useContext } from 'react'
import { NumberContext } from '../../NumberProvider';

const NegativeButton = () => {
	const { handleToggleNegative } = useContext(NumberContext);
	return (
	  <div type='button' onClick={() => handleToggleNegative()}>+/-</div>
  )
}

export default NegativeButton;