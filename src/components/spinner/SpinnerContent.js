import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContent = styled("div")`
  border: 5px solid var(--white-smoke);
  border-top: 5px solid var(--bright-blue);
  border-radius: 50%;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  animation: ${rotate} 1s linear infinite;
  position: relative;
`;

export default SpinnerContent;
