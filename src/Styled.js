import styled from 'styled-components';

export const CalculatorStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;

.СalcApp {
	width: 270px;
	background: #f1f1f3;
	border-radius: 20px;
	padding: 15px;
}

.buttons-grid-container {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(5, 1fr);
	gap: 10px;
  }

  .buttons-grid-container > div {
	display: flex;
	justify-content: center;
	align-items: center;
    width: 100%;
    height: 60px;
    border-radius: 50%;
    font-size: 1.5rem;
	padding: 3px;
    color: grey;
    font-family: 'Orbitron', serif;
    background: white;
	box-shadow: 5px 5px 5px darkgrey;
	&:hover {
		filter: brightness(80%);
	  }
	&:active {
		filter: brightness(60%);
	  }
	// &:focus {
	// 	background: black;
	// }
    }
`;
 export const ScreenStyled = styled.div`
	display: grid;
	grid-template-rows: 90px 50px;
	grid-template-columns: 1fr;
	width: 100%;
	font-family: 'Orbitron', serif; 
	align-items: center;
	border-radius: 20px;
	background: #e1e1e6;
	padding: 10px;
	margin-bottom: 15px;
h2,
p {
	text-align: end;
	color: orange;
	}
h2 {
	font-size: 2rem;
	margin: 0;
	text-align: right;
	}
p {
	margin: 5px 0;
	}
 `;