import React from 'react';
import { FieldArray } from 'formik';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { AddFieldGroup, RemoveFieldGroup } from '../elements';
import { Basic as Grid } from '../elements/grids';

type Props = {
  fieldName: string;
  formName: FormName;
  required?: boolean;
};

const Name: React.FC<Props> = ({ fieldName, formName, required = false }) => (
  <Grid>
    <Label name={fieldName} form={formName} required={required} />
    <FieldArray
      name={fieldName}
      render={({ form, push, remove }) => {
        console.log('!', form, form.values[fieldName]);

        return form.values[fieldName].map((_, index) => {
          const loopLength = form.values[fieldName].length;
          const isLastInput = loopLength === index + 1;

          return (
            <React.Fragment key={index}>
              <TextInput name={`${fieldName}.${index}.value`} form={formName} />
              {isLastInput && (
                <div>
                  {loopLength > 1 && (
                    <RemoveFieldGroup onClick={() => remove(index)} />
                  )}
                  <AddFieldGroup
                    onClick={() =>
                      push({
                        lang: '',
                        value: '',
                      })
                    }
                  />
                </div>
              )}
            </React.Fragment>
          );
        });
      }}
    />
  </Grid>
);

export default Name;
