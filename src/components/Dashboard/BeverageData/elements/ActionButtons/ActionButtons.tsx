import React from 'react';

import { emptyNameValue } from 'components/Dashboard/BeverageData/utils/helpers';
import { AddFieldGroup, RemoveFieldGroup } from '.';

type Props = {
  loopLength: number;
  push: (emptyNameValue: { lang: string; value: string }) => void;
  remove: (index: number) => void;
};

const ActionButtons: React.FC<Props> = ({ loopLength, push, remove }) => (
  <>
    {loopLength > 1 && (
      <RemoveFieldGroup onClick={() => remove(loopLength - 1)} />
    )}
    <AddFieldGroup onClick={() => push(emptyNameValue)} />
  </>
);

export default ActionButtons;
