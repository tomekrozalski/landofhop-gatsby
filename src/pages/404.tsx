import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import styled from 'styled-components';

import Layout from 'components/Layout';
import SEO from 'components/Seo';

const Wrapper = styled.div`
  padding: 4rem 0;
  text-align: center;
`;

const Statement = styled.h1`
  margin: 4rem;
  font: var(--font-weight-medium) 8rem / 1 var(--font-primary);
  text-shadow: 1px 1px 1px var(--color-brighter), 0 0 0 var(--color-darker),
    1px 1px 1px var(--color-brighter);
  color: transparent;
`;

const NotFoundPage: React.FC = () => {
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);

    if (seconds < 1) {
      window.location.href = '/';
    }

    return () => clearTimeout(timeout);
  }, [seconds]);

  return (
    <Layout>
      <SEO title="notFound" />
      <Wrapper>
        <Statement>
          <FormattedMessage id="notFound.title" />
        </Statement>
        <p>
          <FormattedMessage id="notFound.body" values={{ seconds }} />
        </p>
      </Wrapper>
    </Layout>
  );
};

export default NotFoundPage;
