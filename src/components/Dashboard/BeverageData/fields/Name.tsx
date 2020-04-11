import React from 'react';
import { FieldArray } from 'formik';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { SelectType } from 'components/Dashboard/utils/enums';
import { ActionButtons, Select } from '../elements';
import { Double as Grid } from '../elements/grids';

type Props = {
  fieldName: string;
  formName: FormName;
  required?: boolean;
};

const Name: React.FC<Props> = ({ fieldName, formName, required = false }) => (
  <Grid>
    <Label
      forArray="value"
      form={formName}
      name={fieldName}
      required={required}
    />
    <FieldArray
      name={fieldName}
      render={({ form, push, remove }) =>
        form.values[fieldName].map((_: any, index: number) => {
          const loopLength = form.values[fieldName].length;
          const isLastInput = loopLength === index + 1;

          return (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={`${fieldName}-${index}`}>
              <TextInput
                area="2 / 3"
                name={`${fieldName}.${index}.value`}
                form={formName}
              />
              <Select
                area="3 / 4"
                name={`${fieldName}.${index}.lang`}
                placeholder="selectLanguage"
                type={SelectType.language}
              />
              {isLastInput && (
                <ActionButtons
                  loopLength={loopLength}
                  push={push}
                  remove={remove}
                />
              )}
            </React.Fragment>
          );
        })
      }
    />
  </Grid>
);

export default Name;
