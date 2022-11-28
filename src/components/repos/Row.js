import styled from "styled-components";

const Row = styled("li")`
  display: flex;
  column-gap: 20px;
  justify-content: center;
  width: 100%;
  background-color: var(--alice-blue);
  margin: 2px 0;
  flex-direction: column;

  @media (min-width: 768px) {    
    flex-direction: row;
  }
`;

export default Row;
