import React from "react";
import Wrapper from "./Wrapper";
import StyledBtn from "./StyledBtn";
import InfoWrapper from "./InfoWrapper";

const Pagination = ({ movePrev, moveNext, pageInfo, isPrevDisabled, isNextDisabled }) => (
  <Wrapper>
      <StyledBtn
        onClick={movePrev}
        disabled={isPrevDisabled}
      >
        {"<"}
      </StyledBtn>
      <InfoWrapper>{pageInfo}</InfoWrapper>
      <StyledBtn
        onClick={moveNext}
        disabled={isNextDisabled}
      >
        {">"}
      </StyledBtn>
  </Wrapper>
);

export default Pagination;
