import styled from "styled-components";

const CellContent = styled("p")`
  display: flex;
  column-gap: 5px;
  margin: 4px 0;
  span {
    display: inline;
  }
  /* &:first-child {
    width: 20%; 
  } */
  
  @media (min-width: 768px) { 
    span:first-child {
      display: none;
    }
  }
`;

export default CellContent;
