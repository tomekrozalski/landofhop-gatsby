import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const Wrapper = styled.form``;

const SectionHeader = styled.h2`
  grid-column: 1 / -1;
  margin-top: 1rem;
  border-top: 1px solid var(--color-black);
  padding-top: 2rem;
  font: 400 2.2rem / 1 'font.primary';

  &:first-letter {
    text-transform: uppercase;
  }
`;

const SectionDescription = styled.p`
  grid-column: 3 / -1;
  margin: 0 0 2rem 0;
  text-align: right;
  color: var(--color-black);
`;

type Props = {
  description: string;
  title: string;
};

const FormSection: React.FC<Props> = ({ children, description, title }) => (
  <Wrapper>
    <SectionHeader>
      <FormattedMessage id={title} />
    </SectionHeader>
    <SectionDescription>
      <FormattedMessage id={description} />
    </SectionDescription>
    {children}
  </Wrapper>
);

export default FormSection;
