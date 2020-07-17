import React from 'react';
import { FieldArray } from 'formik';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { FieldName } from 'dashboard/utils/enums';
import { ActionButtons, ExpirationDateUnitSelect, Plug } from '../../elements';
import { Basic as Grid } from '../../elements/grids';
import { AgedType, AgedWood, ItemWrapper } from '.';

type Props = {
  fieldName: FieldName;
  formName: FormName;
};

const Aged: React.FC<Props> = ({ fieldName, formName }) => (
  <Grid>
    <Label forArray="value" form={formName} name={fieldName} />
    <FieldArray
      name={fieldName}
      render={({ form, push, remove }) => {
        const values = form.values[fieldName];
        const loopLength = values.length;

        if (values && loopLength) {
          return values.map((_: any, index: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={`${fieldName}-${index}`}>
              <ItemWrapper>
                <h3>
                  <FormattedMessage
                    id="beverage.details.aged.flow"
                    values={{ order: index + 1 }}
                  />
                </h3>
                <AgedType fieldName={fieldName} index={index} />
                <AgedWood fieldName={fieldName} index={index} />
                <div className="aged-time">
                  Czas leżakowania:
                  <div className="aged-time-input-wrapper">
                    <TextInput
                      name={`${fieldName}.${index}.value`}
                      form={formName}
                      type="number"
                    />
                    <ExpirationDateUnitSelect
                      name={`${fieldName}.unit`}
                      form={formName}
                    />
                  </div>
                </div>
                <div>Poprzednia zawartość w którym drewno miało kontakt:</div>
              </ItemWrapper>
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

        return <Plug onClick={() => push({ type: [], wood: [] })} />;
      }}
    />
  </Grid>
);

export default Aged;
