import React from 'react';
import { FieldArray } from 'formik';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { emptyLangValue } from 'dashboard/utils/helpers';
import { FieldName } from 'dashboard/utils/enums';
import { Basic as Grid } from '../elements/grids';
import { ActionButtons, LanguageSelect, Markdown, Plug } from '../elements';

type TaleValue = {
  lang: {
    label: string;
    value: string;
  };
  value: string;
};

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
          return values.map(({ lang, value }: TaleValue, index: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={`${fieldName}-${index}`}>
              <div style={{ gridColumn: '2 / 3', gridRow: 'span 2' }}>
                <TextInput
                  name={`${fieldName}.${index}.value`}
                  form={formName}
                  textarea
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
              <Markdown lang={lang} value={value} />
            </React.Fragment>
          ));
        }

        return <Plug onClick={() => push(emptyLangValue)} />;
      }}
    />
  </Grid>
);

export default Tale;
