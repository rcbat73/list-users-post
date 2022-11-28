import styled from "styled-components";

const AlertWrapper = styled("div")`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px;
  text-align: center;
  border-left: 4px solid var(--red);
  border-radius: 3px;
  box-shadow: 2px 2px 4px var(--light-gray);
`;

export default AlertWrapper;
