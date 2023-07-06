import React, { useContext } from 'react'
import { NumberContext } from '../../NumberProvider'

const ClearButton = () => {
	const { handleClearValue } = useContext(NumberContext);
		return (
			<div type='button' onClick={() => handleClearValue()}>
				AC
			</div>
		)
}

export default ClearButton;