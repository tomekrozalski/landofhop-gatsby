import React from 'react';

import { emptyLangValue } from 'dashboard/utils/helpers';
import { AddFieldGroup, RemoveFieldGroup } from '.';

type Props = {
  push: (value: any) => void;
  pushContent?: any;
  remove: () => void;
  withRemove: boolean;
};

const ActionButtons: React.FC<Props> = ({
  push,
  pushContent,
  remove,
  withRemove,
}) => (
  <>
    {withRemove && <RemoveFieldGroup onClick={remove} />}
    <AddFieldGroup onClick={() => push(pushContent || emptyLangValue)} />
  </>
);

export default ActionButtons;
