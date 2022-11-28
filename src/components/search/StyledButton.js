import styled from "styled-components";

const StyledButton = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  border: none;
  background-color: var(--summer-sky);
  border-radius: 3px;
  color: var(--white);
  padding: 5px 12px;
  &:hover {
    box-shadow: 0px 0px 4px rgb(0 0 0 / 30%);
  }
  height: 100%;
  width: 100%;

  @media (min-width: 768px) { 
    width: 100px;
  }  
`;

export default StyledButton;
