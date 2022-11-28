import styled from "styled-components";

const HeadWrapper = styled("ul")`
  display: none;

  @media (min-width: 768px) {
    display: flex;    
    flex-direction: row;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

export default HeadWrapper;
