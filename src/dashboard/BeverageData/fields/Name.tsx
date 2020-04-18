import React from 'react';
import { FieldArray } from 'formik';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
// import { SelectType } from 'components/Dashboard/utils/enums';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';
import { ActionButtons, LanguageSelect } from '../elements';
import { Double as Grid } from '../elements/grids';

type Props = {
  formName: FormName;
  required?: boolean;
};

const Name: React.FC<Props> = ({ formName, required = false }) => (
  <Grid>
    <Label
      forArray="value"
      form={formName}
      name={FieldName.name}
      required={required}
    />
    <FieldArray
      name={FieldName.name}
      render={({ form, push, remove }) => {
        const values = form.values[FieldName.name];
        const loopLength = values.length;

        return values.map((_: any, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={`${FieldName.name}-${index}`}>
            <TextInput
              area="2 / 3"
              name={`${FieldName.name}.${index}.value`}
              form={formName}
            />
            <LanguageSelect
              area="3 / 4"
              name={`${FieldName.name}.${index}.lang`}
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
