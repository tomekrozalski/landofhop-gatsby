import React from 'react';
import { components } from 'react-select';

import MarkType from './MarkType';

type Props = {
  data: {
    type?: string;
  };
};

const Option: React.FC<Props> = props => (
  <MarkType type={props.data.type}>
    <components.Option {...props} />
  </MarkType>
);

export default Option;
