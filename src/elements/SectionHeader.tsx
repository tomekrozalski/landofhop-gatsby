import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 4rem 0 2rem 0;
  position: relative;

  ::before {
    display: block;
    width: 100%;
    height: 1px;
    content: '';
    background-color: var(--color-bright);
    position: absolute;
    top: 50%;
    left: 0;
    z-index: -1;
  }
`;

const Header = styled.h2`
  display: inline-block;
  margin: 0 4rem;
  padding: 0 1rem;
  font: var(--font-weight-regular) 1.5rem / 1 var(--font-primary);
  background-color: var(--color-white);
`;

const SectionHeader: React.FC = ({ children }) => (
  <Wrapper>
    <Header>{children}</Header>
  </Wrapper>
);

export default SectionHeader;
