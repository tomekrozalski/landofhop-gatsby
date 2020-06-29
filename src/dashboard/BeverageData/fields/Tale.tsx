import React from 'react';
import { FieldArray } from 'formik';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { emptyLangValue } from 'dashboard/utils/helpers';
import { FieldName } from 'dashboard/utils/enums';
import { ActionButtons, LanguageSelect, Plug } from '../elements';
import { Basic as Grid } from '../elements/grids';

const StyledMarkdown = styled(Markdown)`
  grid-column: 2 / 3;
  grid-row: span 2;
  padding: 0 1rem;
  max-height: 28.6rem;
  overflow-y: scroll;
  border: 1px solid var(--color-producer-light);
`;

type Props = {
  fieldName: FieldName;
  formName: FormName;
  required?: boolean;
};

type ValueProps = {
  lang: {
    label: string;
    value: string;
  };
  value: string;
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
          return values.map(({ lang, value }: ValueProps, index: number) => (
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
              <StyledMarkdown lang={lang.value}>{value}</StyledMarkdown>
            </React.Fragment>
          ));
        }

        return <Plug onClick={() => push(emptyLangValue)} />;
      }}
    />
  </Grid>
);

export default Tale;
