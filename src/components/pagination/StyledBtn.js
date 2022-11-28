import styled from "styled-components";

const StyledBtn = styled("button")`
    border: none;
    padding: 0;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    font-weight: bold;
    background-color: ${({ disabled }) => disabled ? `var(--light-gray)}` : `var(--black)`};
    color: var(--white);
    cursor: pointer;
`;

export default StyledBtn;
