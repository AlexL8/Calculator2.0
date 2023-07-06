import React, { useContext } from 'react'
import { NumberContext } from '../../NumberProvider';
import { ScreenStyled } from '../../Styled';


const Screen = (props) => {
  const { number, storedNumber, functionType } = useContext(NumberContext);
  return (
    <ScreenStyled>
        <p>{!storedNumber ? '0' : `${storedNumber} ${functionType} ${number}`}</p>
        <h2>{!number.length && !storedNumber ? '0' : number || storedNumber}</h2>
    </ScreenStyled>
  )
}
export default Screen;