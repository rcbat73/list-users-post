import React from 'react';
import SpinnerContent from './SpinnerContent';
import SpinnerWrapper from './SpinnerWrapper';

const Spinner = ({ width, height, positioned }) => (
  <SpinnerWrapper positioned={positioned}>
    <SpinnerContent width={width} height={height} />
  </SpinnerWrapper>
);

export default Spinner;
