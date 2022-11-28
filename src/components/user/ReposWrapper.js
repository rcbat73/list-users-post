import styled from "styled-components";

const ReposWrapper = styled("div")`
  position: relative;
  width: 100%;
  h3 {
    text-align: center;
  }

  @media (min-width: 768px) { 
    h3 {
      text-align: left;
    }
  }
`;

export default ReposWrapper;
