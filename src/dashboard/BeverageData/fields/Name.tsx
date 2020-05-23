import React from 'react';
import { FieldArray } from 'formik';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { FieldName } from 'dashboard/utils/enums';
import { ActionButtons, LanguageSelect } from '../elements';
import { Double as Grid } from '../elements/grids';

type Props = {
  fieldName: FieldName;
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
      render={({ form, push, remove }) => {
        const values = form.values[fieldName];
        const loopLength = values.length;

        return values.map((_: any, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={`${fieldName}-${index}`}>
            <TextInput
              area="2 / 3"
              name={`${fieldName}.${index}.value`}
              form={formName}
            />
            <LanguageSelect
              area="3 / 4"
              name={`${fieldName}.${index}.lang`}
              placeholder="selectLanguage"
            />
            {loopLength === index + 1 && (
              <ActionButtons
                push={push}
                remove={() => remove(loopLength - 1)}
                withRemove={loopLength > 1}
              />
            )}
          </React.Fragment>
        ));
      }}
    />
  </Grid>
);

export default Name;
