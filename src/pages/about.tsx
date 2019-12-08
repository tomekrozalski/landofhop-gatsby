import React from 'react';
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl';
import { IntlShape } from 'react-intl';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';

import Layout from 'components/Layout';
import SEO from 'components/Seo';

const Wrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 4rem 0;
  font: 400 1.5rem / 2.5rem var(--font-primary);

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
  font: 500 3rem / 4rem var(--font-primary);
  text-align: center;
`;

type Props = {
  intl: IntlShape
}

const About: React.FC<Props> = ({ intl }) => (
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
