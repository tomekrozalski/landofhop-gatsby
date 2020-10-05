import React from 'react';
import { FieldArray } from 'formik';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { FieldName } from 'dashboard/utils/enums';
import { Basic as Grid } from '../elements/grids';
import { ActionButtons, LanguageSelect, Markdown, Plug } from '../elements';

const emptyTale = {
  article: '',
  lang: '',
  lead: '',
};

type TaleValue = {
  article: string;
  lang: {
    label: string;
    value: string;
  };
  lead: string;
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
          return values.map(
            ({ article, lang, lead }: TaleValue, index: number) => (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={`${fieldName}-${index}`}>
                <div style={{ gridColumn: '2 / 3', gridRow: 'span 2' }}>
                  <TextInput
                    name={`${fieldName}.${index}.lead`}
                    form={formName}
                    textarea
                  />
                  <TextInput
                    name={`${fieldName}.${index}.article`}
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
                    pushContent={emptyTale}
                    remove={() => remove(loopLength - 1)}
                    withRemove
                  />
                )}
                <Markdown lang={lang} value={lead} />
                {article && <Markdown lang={lang} value={article} />}
              </React.Fragment>
            ),
          );
        }

        return <Plug onClick={() => push(emptyTale)} />;
      }}
    />
  </Grid>
);

export default Tale;
