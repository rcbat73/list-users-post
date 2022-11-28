import styled from "styled-components";

const CellsWrapper = styled("ul")`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
  height: 200px;
  overflow: auto;
  row-gap: 10px;

  @media (min-width: 768px) {    
    row-gap: 0;
  }
`;

export default CellsWrapper;
