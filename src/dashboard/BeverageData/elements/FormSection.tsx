import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Form } from 'formik';

const SectionHeader = styled.header`
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
  <Form>
    <SectionHeader>
      <SectionTitle>
        <FormattedMessage id={title} />
      </SectionTitle>
      <SectionDescription>
        <FormattedMessage id={description} />
      </SectionDescription>
    </SectionHeader>
    {children}
  </Form>
);

export default FormSection;
