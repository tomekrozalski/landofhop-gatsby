import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const Wrapper = styled.form``;

const SectionHeader = styled.h2`
  margin-top: 1rem;
  border-top: 1px solid var(--color-black);
  padding-top: 2rem;
  font: var(--font-weight-regular) 2.2rem / 1 var(--font-primary);
`;

const SectionDescription = styled.p`
  margin-bottom: 2rem;
  text-align: right;
  color: var(--color-darker);
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
