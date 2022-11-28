import styled from "styled-components";

const Header = styled("header")`
  display: flex;
  justify-content: center;
  column-gap: 20px;
  flex-direction: column;
  row-gap: 10px;

  @media (min-width: 768px) { 
    border: none;
    border-radius: 0;
    flex-direction: row;
    align-self: start;
  }
`;

export default Header;
