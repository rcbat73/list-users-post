import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: block;
  background: transparent;
  border: none;
  cursor: pointer;
  background-color: var(--black);
  border-radius: 50%;
  &:hover {
    box-shadow: 0px 0px 4px rgb(0 0 0 / 30%);
  }
  height: 30px;
  width: 30px;
`;

export default StyledLink;
