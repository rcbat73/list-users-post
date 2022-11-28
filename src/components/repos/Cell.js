import styled from "styled-components";

const Cell = styled("div")`
  margin: 2px 10px;
  span {
    display: inline;
  }
  
  @media (min-width: 768px) {    
    width: 60%;
    span {
      display: none;
    }
  }
`;

export default Cell;
