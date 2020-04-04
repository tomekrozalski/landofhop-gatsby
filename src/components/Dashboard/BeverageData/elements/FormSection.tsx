import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Form } from 'formik';

const Wrapper = styled(Form)`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns:
    1fr var(--size-input-height) 22rem 22rem var(--size-input-height)
    var(--size-input-height) 1fr;
`;

const SectionHeader = styled.header`
  grid-column: 1 / -1;
  margin: 1rem 0 2rem 0;
  border-top: 1px solid var(--color-black);
  padding-top: 2rem;
`;

const SectionTitle = styled.h2`
  margin: 0;
  font: var(--font-weight-regular) 2.2rem / 1 var(--font-primary);
`;

const SectionDescription = styled.p`
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
      <SectionTitle>
        <FormattedMessage id={title} />
      </SectionTitle>
      <SectionDescription>
        <FormattedMessage id={description} />
      </SectionDescription>
    </SectionHeader>
    {children}
  </Wrapper>
);

export default FormSection;
