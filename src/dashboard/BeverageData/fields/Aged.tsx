import React from 'react';
import { FieldArray } from 'formik';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { emptyLangValue } from 'dashboard/utils/helpers';
import { FieldName } from 'dashboard/utils/enums';
import { ActionButtons, LanguageSelect, Plug } from '../elements';
import { Basic as Grid } from '../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
};

const Aged: React.FC<Props> = ({ fieldName, formName }) => (
  <Grid>
    <Label forArray="value" form={formName} name={fieldName} />
    <FieldArray
      name={fieldName}
      render={({ form, push, remove }) => {
        const values = form.values[fieldName];
        const loopLength = values.length;

        if (values && loopLength) {
          return values.map((_: any, index: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <div
              style={{ border: '2px solid red', padding: '10px' }}
              key={`${fieldName}-${index}`}
            >
              <div>Bum</div>
              {loopLength === index + 1 && (
                <ActionButtons
                  push={push}
                  remove={() => remove(loopLength - 1)}
                  withRemove
                />
              )}
            </div>
          ));
        }

        return <Plug onClick={() => push(emptyLangValue)} />;
      }}
    />
  </Grid>
);

export default Aged;
