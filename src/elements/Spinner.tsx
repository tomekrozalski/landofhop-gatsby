import React from 'react';
import styled, { keyframes } from 'styled-components';

const SpinnerWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: var(--color-white);
  position: absolute;
  top: 0;
  left: 0;
  z-index: var(--index-spinner);
`;

const CubesWrapper = styled.ul`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 50%;
  z-index: var(--index-spinner);
  top: 50%;
  transform: translate(-50%, -50%) rotateZ(45deg);
`;

const animation = keyframes`
	0%, 10% {
		-webkit-transform: perspective(140px) rotateX(-180deg);
		transform: perspective(140px) rotateX(-180deg);
		opacity: 0;
	}
	25%, 75% {
		-webkit-transform: perspective(140px) rotateX(0deg);
		transform: perspective(140px) rotateX(0deg);
		opacity: 1;
	}
	90%, 100% {
		-webkit-transform: perspective(140px) rotateY(180deg);
		transform: perspective(140px) rotateY(180deg);
		opacity: 0;
	}
`;

const Cube = styled.li<{ cubeDelay?: number; cubeRotate?: number }>`
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  transform: scale(1.1)
    ${({ cubeRotate }) => cubeRotate && `rotateZ(${cubeRotate}deg)`};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-black);
    animation: ${animation} 2.4s infinite linear both;
    transform-origin: 100% 100%;
    animation-delay: ${({ cubeDelay }) => (cubeDelay ? `${cubeDelay}s` : '0s')};
  }
`;

const Spinner: React.FC = () => (
  <SpinnerWrapper>
    <CubesWrapper>
      <Cube />
      <Cube cubeRotate={90} cubeDelay={0.3} />
      <Cube cubeRotate={270} cubeDelay={0.9} />
      <Cube cubeRotate={180} cubeDelay={0.6} />
    </CubesWrapper>
  </SpinnerWrapper>
);

export default Spinner;
