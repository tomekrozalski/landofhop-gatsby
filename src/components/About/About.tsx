import React from 'react';
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl';
import { IntlShape } from 'react-intl';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';

import { Layout, SEO } from 'components';
import { Header, Wrapper } from 'elements/textPage';

const AboutWrapper = styled(Wrapper)`
  max-width: 70rem;
`;

const About: React.FC<{ intl: IntlShape }> = ({ intl }) => (
  <Layout>
    <SEO title="about" />
    <AboutWrapper>
      <Header>
        <FormattedMessage id="about.header" />
      </Header>
      <p>
        <Markdown>{intl.formatMessage({ id: 'about.body' })}</Markdown>
      </p>
    </AboutWrapper>
  </Layout>
);

export default injectIntl(About);
