import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import { ErrorHeader, ErrorWrapper } from 'elements';

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
      <ErrorWrapper>
        <ErrorHeader>
          <FormattedMessage id="notFound.title" />
        </ErrorHeader>
        <p>
          <FormattedMessage id="notFound.body" values={{ seconds }} />
        </p>
      </ErrorWrapper>
    </Layout>
  );
};

export default NotFoundPage;
