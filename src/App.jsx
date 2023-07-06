import React, { useContext, useEffect } from 'react';
import Screen from './Components/ScreenCalc/Screen';
import NumberButton from './Components/Buttons/NumberButton';
import ClearButton from './Components/Buttons/ClearButton';
import FunctionButton from './Components/Buttons/FunctionButton';
import BackButton from './Components/Buttons/BackButton';
import EqualButton from './Components/Buttons/EqualButton';
import NegativeButton from './Components/Buttons/NegativeButoon';
import ProcentButton from './Components/Buttons/ProcentButton';
import { VALUE_BUTTONS } from './CONSTANTS';
import { CalculatorStyled } from './Styled';
import { NumberContext } from './NumberProvider';


function App() {
  const numberProvider = useContext(NumberContext)
  useEffect(() => {
    const handleKeyUpClick = (event) => {
      // event.preventDefault();
      switch (event.key) {
          case  VALUE_BUTTONS.ENTER:
            numberProvider.doMath();
            break;
          case VALUE_BUTTONS.CLEAR:
            numberProvider.handleClearValue();
            break;
          case VALUE_BUTTONS.PLUS_MINUS:
            numberProvider.handleToggleNegative();
            break;
          case VALUE_BUTTONS.PERCENT:
            numberProvider.handleProcentButton();
            break;
          case VALUE_BUTTONS.DELETE:
            numberProvider.handleBackButton();
            break;
          case VALUE_BUTTONS.SEVEN:
            numberProvider.handleSetScreenValue(VALUE_BUTTONS.SEVEN);
            break;
          case VALUE_BUTTONS.EIGHT:
            numberProvider.handleSetScreenValue(VALUE_BUTTONS.EIGHT);
            break;
          case VALUE_BUTTONS.NINE:
            numberProvider.handleSetScreenValue(VALUE_BUTTONS.NINE);
            break;
          case VALUE_BUTTONS.DIVIDE:
            numberProvider.handleSetCalcFunction(VALUE_BUTTONS.DIVIDE);
            break;
          case VALUE_BUTTONS.FOUR:
            numberProvider.handleSetScreenValue(VALUE_BUTTONS.FOUR);
            break;
          case VALUE_BUTTONS.FIVE:
            numberProvider.handleSetScreenValue(VALUE_BUTTONS.FIVE);
            break;
          case VALUE_BUTTONS.SIX:
            numberProvider.handleSetScreenValue(VALUE_BUTTONS.SIX);
            break;
          case VALUE_BUTTONS.MULTIPLY:
            numberProvider.handleSetCalcFunction(VALUE_BUTTONS.MULTIPLY);
            break;
          case VALUE_BUTTONS.ONE:
            numberProvider.handleSetScreenValue(VALUE_BUTTONS.ONE);
            break;
          case VALUE_BUTTONS.TWO:
            numberProvider.handleSetScreenValue(VALUE_BUTTONS.TWO);
            break;
          case VALUE_BUTTONS.THREE:
            numberProvider.handleSetScreenValue(VALUE_BUTTONS.THREE);
            break;
          case VALUE_BUTTONS.SUBTRACTION:
            numberProvider.handleSetCalcFunction(VALUE_BUTTONS.SUBTRACTION);
            break;
          case VALUE_BUTTONS.POINT:
            numberProvider.handleSetScreenValue(VALUE_BUTTONS.POINT);
            break;
          case VALUE_BUTTONS.ZERO:
            numberProvider.handleSetScreenValue(VALUE_BUTTONS.ZERO);
            break;
          case VALUE_BUTTONS.ADD:
            numberProvider.handleSetCalcFunction(VALUE_BUTTONS.ADD);
            break;
          default:
            return;
      }
    }
    window.addEventListener("keyup", handleKeyUpClick);

    return () => window.removeEventListener("keyup", handleKeyUpClick)
  }, [numberProvider])

  return (
    <CalculatorStyled>
      <div className="СalcApp">
        <Screen/>
        <div className="buttons-grid-container">
          <ClearButton buttonValue={VALUE_BUTTONS.CLEAR}/>
          <NegativeButton buttonValue={VALUE_BUTTONS.PLUS_MINUS}/>
          <ProcentButton buttonValue={VALUE_BUTTONS.PERCENT}/>
          <BackButton buttonValue={VALUE_BUTTONS.DELETE}/>

          <NumberButton buttonValue={VALUE_BUTTONS.SEVEN}/>
          <NumberButton buttonValue={VALUE_BUTTONS.EIGHT}/>
          <NumberButton buttonValue={VALUE_BUTTONS.NINE}/>
          <FunctionButton buttonValue={VALUE_BUTTONS.DIVIDE}/>

          <NumberButton buttonValue={VALUE_BUTTONS.FOUR}/>
          <NumberButton buttonValue={VALUE_BUTTONS.FIVE}/>
          <NumberButton buttonValue={VALUE_BUTTONS.SIX}/>
          <FunctionButton buttonValue={VALUE_BUTTONS.MULTIPLY}/>

          <NumberButton buttonValue={VALUE_BUTTONS.ONE}/>
          <NumberButton buttonValue={VALUE_BUTTONS.TWO}/>
          <NumberButton buttonValue={VALUE_BUTTONS.THREE}/>
          <FunctionButton buttonValue={VALUE_BUTTONS.SUBTRACTION}/>

          <NumberButton buttonValue={VALUE_BUTTONS.POINT}/>
          <NumberButton buttonValue={VALUE_BUTTONS.ZERO}/>
          <EqualButton buttonValue={VALUE_BUTTONS.EQUALS}/>
          <FunctionButton buttonValue={VALUE_BUTTONS.ADD}/>
        </div>
      </div>
    </CalculatorStyled>
  );
}

export default App;
