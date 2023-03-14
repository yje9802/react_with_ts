import React from "react";
import styled, { keyframes } from "styled-components";

export const Animation = keyframes`
	0% {
		transform: rotate(0deg);
		border-radius: 0px
	}
	50% {
		border-radius: 100px
	}
	100% {
		transform: rotate(360deg);
		border-radius: 0px
	}
`;

const Father = styled.div`
	display: flex;
`;
const Box = styled.div`
	background-color: ${(props) => props.bgColor};
	width: 100px;
	height: 100px;

	display: flex;
	justify-content: center;
	align-items: center;
	// spang tag inside the Box component
	span {
		font-size: 36px;
		&:hover {
			font-size: 48px;
		}
		&:active {
			opacity: 0;
		}
	}
`;
// Adapting and Extending
const Circle = styled(Box)`
	border-radius: 50%;
`;
// Attrs : attributes applied to all Input components
const Input = styled.input.attrs({ required: true, maxLength: 10 })`
	width: 200px;
	height: 50px;
	border: 5px solid black;
	background-color: gray;
`;

function App() {
	return (
		<Father as="header">
			<Box bgColor="teal" />
			<Box bgColor="tomato">
				<span>🥯</span>
			</Box>
			<Circle bgColor="yellow" />
			<Input />
		</Father>
	);
}

export default App;
