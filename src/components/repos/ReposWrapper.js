import styled from "styled-components";

const ReposWrapper = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  border: 2px solid lightgrey;
  border-radius: 4px;

  @media (min-width: 768px) { 
    border: none;
    border-radius: 0;
  }
`;

export default ReposWrapper;
