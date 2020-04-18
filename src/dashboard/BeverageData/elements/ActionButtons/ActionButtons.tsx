import React from 'react';

import { emptyLangValue } from 'dashboard/utils/helpers';
import { AddFieldGroup, RemoveFieldGroup } from '.';

type Props = {
  push: (emptyNameValue: { lang: string; value: string }) => void;
  remove: () => void;
  withRemove: boolean;
};

const ActionButtons: React.FC<Props> = ({ push, remove, withRemove }) => (
  <>
    {withRemove && <RemoveFieldGroup onClick={remove} />}
    <AddFieldGroup onClick={() => push(emptyLangValue)} />
  </>
);

export default ActionButtons;
