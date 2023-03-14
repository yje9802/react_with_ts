import React, { useState } from "react";
import styled from "styled-components";
import Circle from "./Circle"

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: {value},
    } = event;
    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
  };

  const Button = styled.button`
    background-color: ${(props) => props.theme.btnColor}
  `;

	return (
		<div>
      <Circle bgColor="teal" borderColor="black" />
      <Circle bgColor="tomato" />
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="username" value={value} onChange={onChange} />
        <Button>Log In</Button>
      </form>
    </div>
	);
}

export default App;
