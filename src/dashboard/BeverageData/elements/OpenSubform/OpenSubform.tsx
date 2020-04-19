import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { AddToDB as AddToDBIcon } from '../icons';
import { Button, Title } from '.';

type Props = {
  label: string;
  onClick: () => void;
};

const OpenSubform: React.FC<Props> = ({ label, onClick }) => (
  <Button onClick={onClick} type="button">
    <AddToDBIcon />
    <Title>
      <FormattedMessage id={label} />
    </Title>
  </Button>
);

export default OpenSubform;
