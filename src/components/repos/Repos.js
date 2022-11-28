import React from 'react';
import Spinner from "../spinner/Spinner";
import ReposWrapper from './ReposWrapper';
import HeadWrapper from './HeadWrapper';
import CellsWrapper from './CellsWrapper';
import HeaderRow from './HeaderRow';
import Row from './Row';
import Cell from './Cell';
import CellContent from "./CellContent";

const Repos = ({ repos, isFetching }) => (
  <ReposWrapper>
    {isFetching ? <Spinner width="30" height="30" positioned={true} /> : null}
    <HeadWrapper>
      <HeaderRow>
        <Cell>Name</Cell>
        <Cell>Description</Cell>
      </HeaderRow>
    </HeadWrapper>
    <CellsWrapper>
      {repos.map(({ description, name }) => (
        <Row key={name}>
          <Cell><CellContent><span><b>name:</b></span><span>{name}</span></CellContent></Cell>
          <Cell><CellContent><span><b>description:</b></span><span>{description}</span></CellContent></Cell>
        </Row>
      ))}
    </CellsWrapper>
  </ReposWrapper>
);

export default Repos;
