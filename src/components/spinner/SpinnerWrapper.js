import styled from "styled-components";

const SpinnerWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ positioned }) => positioned ? "position: absolute" : null};
  height: 30px;
  left: 50%;
  ${({ positioned, leftPos }) => positioned ? `transform: translateX(${-leftPos/2}px)` : null};
`;

export default SpinnerWrapper;
