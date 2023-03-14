import styled from "styled-components"

interface CircleProps {
    bgColor: string;
    borderColor?: string;
}

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 3px solid ${(props) => props.borderColor};
    background-color: ${(props) => props.bgColor};
`;

function Circle({bgColor, borderColor}: CircleProps) {
    // if borderColor exists then use borderColor; else use bgColor
    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}/>
}

export default Circle