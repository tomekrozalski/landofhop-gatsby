import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { Database as DatabaseIcon, Language as LanguageIcon } from '../icons';
import { Button, Title } from '.';

type Props = {
  direction?: 'left' | 'right';
  icon?: 'database' | 'language';
  label: string;
  onClick: () => void;
};

const OpenSubform: React.FC<Props> = ({
  direction = 'left',
  icon = 'database',
  label,
  onClick,
}) => (
  <Button onClick={onClick} type="button">
    {icon === 'database' && <DatabaseIcon />}
    {icon === 'language' && <LanguageIcon />}
    <Title direction={direction}>
      <FormattedMessage id={label} />
    </Title>
  </Button>
);

export default OpenSubform;
