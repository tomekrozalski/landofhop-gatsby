import React from 'react';
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl';
import { IntlShape } from 'react-intl';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';

import { Layout, SEO } from 'components';

const Wrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 4rem 0;
  font: var(--font-weight-light) 1.5rem / 2.5rem var(--font-primary);

  a {
    color: var(--color-success-strong);
    border-bottom: 1px solid var(--color-white);
    transition: border-color var(--transition-default);
  }

  a:hover {
    border-color: var(--color-black);
  }
`;

const Header = styled.h1`
  margin: 3rem 0;
  text-align: center;
`;

const About: React.FC<{ intl: IntlShape }> = ({ intl }) => (
  <Layout>
    <SEO title="about" />
    <Wrapper>
      <Header>
        <FormattedMessage id="about.header" />
      </Header>
      <p>
        <Markdown>{intl.formatMessage({ id: 'about.body' })}</Markdown>
      </p>
    </Wrapper>
  </Layout>
);

export default injectIntl(About);
