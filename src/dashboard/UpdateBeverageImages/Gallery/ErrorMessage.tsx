import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { config } from './utils';

type Props = {
  size: number;
  type: string;
};

const ErrorMessage: React.FC<Props> = ({ size, type }) => {
  if (!config.accept.includes(type)) {
    return (
      <FormattedMessage id="dashboard.updateBeverageImages.error.wrongFormat" />
    );
  }

  if (size < config.minSize * 1024) {
    return (
      <FormattedMessage
        id="dashboard.updateBeverageImages.error.tooSmall"
        values={{ value: config.minSize }}
      />
    );
  }

  if (size > config.maxSize * 1024) {
    return (
      <FormattedMessage
        id="dashboard.updateBeverageImages.error.tooBig"
        values={{ value: config.maxSize }}
      />
    );
  }

  return <FormattedMessage id="dashboard.updateBeverageImages.error.other" />;
};

export default ErrorMessage;
