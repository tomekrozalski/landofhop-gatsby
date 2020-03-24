import React from 'react';
import styled from 'styled-components';

const Circle = styled.circle`
  fill: steelblue;
  fill-opacity: 0.3;
`;

type Props = {
  x: number;
  y: number;
};

const DataPoint: React.FC<Props> = ({ x, y }) => (
  <Circle cx={x - 1} cy={y} r="3.5" />
);

export default DataPoint;
