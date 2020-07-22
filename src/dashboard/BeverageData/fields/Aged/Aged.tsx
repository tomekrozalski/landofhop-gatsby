import React from 'react';
import { FieldArray } from 'formik';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { FieldName } from 'dashboard/utils/enums';
import { ActionButtons, Plug } from '../../elements';
import { Basic as Grid } from '../../elements/grids';
import { AgedTime, AgedType, AgedWood, ItemWrapper, PreviousContent } from '.';

type Props = {
  fieldName: FieldName;
  formName: FormName;
};

const emptyAged = { previousContent: null, time: null, type: null, wood: null };

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
                <AgedTime
                  fieldName={fieldName}
                  formName={formName}
                  index={index}
                />
                <PreviousContent
                  fieldName={fieldName}
                  formName={formName}
                  index={index}
                />
              </ItemWrapper>
              {loopLength === index + 1 && (
                <ActionButtons
                  push={push}
                  pushContent={emptyAged}
                  remove={() => remove(loopLength - 1)}
                  withRemove
                />
              )}
            </React.Fragment>
          ));
        }

        return <Plug onClick={() => push(emptyAged)} />;
      }}
    />
  </Grid>
);

export default Aged;
