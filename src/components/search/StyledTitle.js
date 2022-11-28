import styled from "styled-components";

const StyledTitle = styled("h1")`
    text-align: center;
    width: 100%;

    @media (min-width: 768px) { 
        column-gap: 10px;
        flex-direction: row;
    }
`;

export default StyledTitle;
