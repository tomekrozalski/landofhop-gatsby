import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';

const Wrapper = styled.h3`
  margin-top: 2rem;
  font: var(--font-weight-regular) 1.6rem / 1 var(--font-primary);
  position: relative;
  z-index: 3;

  &::after {
    display: block;
    height: 1px;
    width: 100%;
    content: '';
    background: var(--color-bright);
    position: absolute;
    top: 50%;
    z-index: -1;
  }
`;

const MessageWrapper = styled.span`
  margin-left: 4rem;
  padding: 0 2rem;
  background: var(--color-white);
`;

type Props = {
  title: string;
};

const SubSection: React.FC<Props> = ({ title }) => (
  <Wrapper>
    <MessageWrapper>
      <FormattedMessage id={title} />
    </MessageWrapper>
  </Wrapper>
);

export default SubSection;
