import React from 'react';
import { FieldArray } from 'formik';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { FieldName } from 'dashboard/utils/enums';
import { Basic as Grid } from '../../elements/grids';
import { ActionButtons, Markdown, Plug } from '../../elements';
import { IngredientsDescriptionType } from './IngredientsDescription.type';
import { Complete, Description, emptyIngredientsDescription } from '.';

type Props = {
  fieldName: FieldName;
  formName: FormName;
  required?: boolean;
};

const IngredientsDescription: React.FC<Props> = ({
  fieldName,
  formName,
  required = false,
}) => (
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
            (
              { language, value }: IngredientsDescriptionType,
              index: number,
            ) => (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={`${fieldName}-${index}`}>
                <Description
                  fieldName={fieldName}
                  formName={formName}
                  index={index}
                />
                <Complete
                  fieldName={fieldName}
                  formName={formName}
                  index={index}
                />
                {loopLength === index + 1 && (
                  <ActionButtons
                    push={push}
                    pushContent={emptyIngredientsDescription}
                    remove={() => remove(loopLength - 1)}
                    withRemove
                  />
                )}
                <Markdown lang={language} value={value} />
              </React.Fragment>
            ),
          );
        }

        return <Plug onClick={() => push(emptyIngredientsDescription)} />;
      }}
    />
  </Grid>
);

export default IngredientsDescription;
