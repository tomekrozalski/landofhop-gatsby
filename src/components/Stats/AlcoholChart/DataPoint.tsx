import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const Bar = styled.rect`
  fill: steelblue;
  fill-opacity: 0.8;
  stroke: steelblue;
  stroke-width: 1.5px;
  cursor: pointer;

  :hover {
    fill: var(--color-black);
    fill-opacity: 1;
    stroke: var(--color-black);
  }
`;

const Text = styled.text`
  fill: var(--color-white);
  font: 1.4rem / 1 var(--font-primary);
  text-transform: uppercase;
  pointer-events: none;
  transition: opacity var(--transition-default);
`;

const BackgroundRect = styled.rect`
  stroke: steelblue;
  stroke-width: 1.5px;
  fill: steelblue;
  pointer-events: none;
  transition: opacity var(--transition-default);
`;

type Props = {
  beverages: number;
  height: number;
  value: number;
  x: number;
  y: number;
};

const DataPoint: React.FC<Props> = ({ beverages, height, value, x, y }) => {
  const datapointText = useRef<SVGTextElement>(null!);
  const [opacity, setOpacity] = useState(0);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    setTextWidth(datapointText.current.getBBox().width);
  }, []);

  return (
    <>
      <Bar
        x={x - 1}
        y={y}
        width="4.5"
        height={height - y}
        onMouseOver={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0)}
      />
      <BackgroundRect
        className="datapoint-background"
        width={textWidth + 20}
        height={24}
        style={{ opacity }}
        x={x + 14}
        y={y - 20}
      />
      <Text
        className="datapoint-text"
        ref={datapointText}
        style={{ opacity }}
        x={x + 26}
        y={y - 3}
      >
        {`${value}%: ${beverages}`}
      </Text>
    </>
  );
};

export default DataPoint;
