import React, { useState } from "react";
import { VALUE_BUTTONS } from './CONSTANTS';

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
	const [number, setNumber] = useState('');
	const [storedNumber, setStoredNumber] = useState('');
 	const [functionType, setFunctionType] = useState('');

	const handleSetScreenValue = (num) => {
		if ((!number.includes('.') || num !== '.') && number.length < 8) {
		  setNumber(`${(number + num).replace(/^0+/, '')}`);
		}
	  };
	
	const handleSetStoredValue = () => {
		setStoredNumber(number);
		setNumber('');
	};

	const handleClearValue = () => {
		setNumber('');
		setStoredNumber('');
		setFunctionType('');
	};
	
	const handleBackButton = () => {
		if (number !== '') {
		  const deletedNumber = number.slice(0, number.length - 1);
		  setNumber(deletedNumber);
		}
	};

	const handleProcentButton = () => {
		if (number) {
			setNumber('0');
		}
		if (number && storedNumber && (functionType === VALUE_BUTTONS.ADD || functionType === VALUE_BUTTONS.SUBTRACTION)) {
			setNumber(`${storedNumber * number / 100}`);
		}
		if (number && storedNumber && (functionType === VALUE_BUTTONS.MULTIPLY || functionType === VALUE_BUTTONS.DIVIDE)) {
			setNumber(`${number / 100}`);
		}
	}
	
	const handleSetCalcFunction = (type) => {
		if (number) {
		  setFunctionType(type);
		  handleSetStoredValue();
		}
		if (storedNumber) {
		  setFunctionType(type);
		}
	};

	const handleToggleNegative = () => {
		if (number) {
		  if (number > 0) {
			setNumber(`-${number}`);
		  } else {
			const positiveNumber = number.slice(1);
			setNumber(positiveNumber);
		  }
		} else if (storedNumber > 0) {
		  setStoredNumber(`-${storedNumber}`);
		} else {
		  const positiveNumber = storedNumber.slice(1);
		  setStoredNumber(positiveNumber);
		}
	  };
	
	  const doMath = () => {
		// console.log('n', number);
		// console.log('st', storedNumber);
		// console.log('ft', functionType);
		if (number && storedNumber) {
		  switch (functionType) {
			case '+':
			  setStoredNumber(
				`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`
			  );
			  break;
			case '-':
			  setStoredNumber(
				`${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`) / 1000}`
			  );
			  break;
			case '/':
			  setStoredNumber(
				`${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`
			  );
			  break;
			case '*':
			  setStoredNumber(
				`${Math.round(`${parseFloat(storedNumber) * parseFloat(number) * 1000}`) / 1000}`
			  );
			  break;
			default:
			  break;
		  }
		  setNumber('');
		}
	  };
	
	  return (
		<NumberContext.Provider
		  value={{
			doMath,
			functionType,
			handleBackButton,
			handleClearValue,
			handleProcentButton,
			handleSetCalcFunction,
			handleSetScreenValue,
			handleSetStoredValue,
			handleToggleNegative,
			number,
			storedNumber,
			setNumber,
		  }}>
		  {props.children}
		</NumberContext.Provider>
	  );
	};
	
	export default NumberProvider;