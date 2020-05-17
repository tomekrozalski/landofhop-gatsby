import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Form } from 'formik';

const Header = styled.h1`
  margin: 2rem 0 4rem 0;
  text-align: center;
`;

type Props = {
  title: string;
};

const SubformWrapper: React.FC<Props> = ({ children, title }) => (
  <Form>
    <Header>
      <FormattedMessage id={title} />
    </Header>
    {children}
  </Form>
);

export default SubformWrapper;
