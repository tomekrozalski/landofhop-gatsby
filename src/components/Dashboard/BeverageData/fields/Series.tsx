import React from 'react';
import { FieldArray } from 'formik';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { emptyLangValue } from 'components/Dashboard/BeverageData/utils/helpers';
import { SelectType } from 'components/Dashboard/utils/enums';
import { ActionButtons, Plug, Select } from '../elements';
import { FieldName } from '../utils/enums';
import { Double as Grid } from '../elements/grids';

type Props = {
  formName: FormName;
  required?: boolean;
};

const Series: React.FC<Props> = ({ formName, required = false }) => (
  <Grid>
    <Label
      forArray="value"
      form={formName}
      name={FieldName.series}
      required={required}
    />
    <FieldArray
      name={FieldName.series}
      render={({ form, push, remove }) => {
        const values = form.values[FieldName.series];
        const loopLength = values.length;

        if (values && loopLength) {
          return values.map((_: any, index: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={`${FieldName.series}-${index}`}>
              <TextInput
                area="2 / 3"
                name={`${FieldName.series}.${index}.value`}
                form={formName}
              />
              <Select
                area="3 / 4"
                name={`${FieldName.series}.${index}.lang`}
                placeholder="selectLanguage"
                type={SelectType.language}
              />
              {loopLength === index + 1 && (
                <ActionButtons
                  push={push}
                  remove={() => remove(loopLength - 1)}
                  withRemove
                />
              )}
            </React.Fragment>
          ));
        }

        return <Plug onClick={() => push(emptyLangValue)} />;
      }}
    />
  </Grid>
);

export default Series;
