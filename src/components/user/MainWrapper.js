import styled from "styled-components";

const MainWrapper = styled("main")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px 20px;
  row-gap: 20px;
  @media (min-width: 425px) {
    padding: 40px;
  }
`;

export default MainWrapper;
