import styled from "styled-components";

const StyledForm = styled("form")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
  height: 30px;  
  padding: 10px 40px;

  @media (min-width: 768px) { 
    column-gap: 10px;
    flex-direction: row;
  }
`;

export default StyledForm;
