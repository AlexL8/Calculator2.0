import React, { useContext } from 'react'
import { NumberContext } from '../../NumberProvider';


const ProcentButton = () => {
	const { handleProcentButton } = useContext(NumberContext);
  return (
	<div type='button' onClick={handleProcentButton}>%</div>
  )
}

export default ProcentButton;