import React from 'react';
import { FieldArray } from 'formik';

import { FormName } from 'utils/enums';
import { Label, TextArea } from 'elements';
import { emptyLangValue } from 'dashboard/utils/helpers';
import { FieldName } from 'dashboard/utils/enums';
import { ActionButtons, LanguageSelect, Plug } from '../elements';
import { TextArea as Grid } from '../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
  required?: boolean;
};

const Tale: React.FC<Props> = ({ fieldName, formName, required = false }) => (
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

        if (values && loopLength) {
          return values.map((_: any, index: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={`${fieldName}-${index}`}>
              <div style={{ gridColumn: '2 / 3', gridRow: 'span 2' }}>
                <TextArea
                  name={`${fieldName}.${index}.value`}
                  form={formName}
                />
                <LanguageSelect
                  name={`${fieldName}.${index}.lang`}
                  placeholder="selectLanguage"
                />
              </div>
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

export default Tale;
