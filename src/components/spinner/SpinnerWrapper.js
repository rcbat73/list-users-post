import styled from "styled-components";

const SpinnerWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ positioned }) => positioned ? "position: absolute" : null};
  height: 30px;
  width: 100%;
  top: 50%;
`;

export default SpinnerWrapper;
