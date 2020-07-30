import React from 'react';
import { FieldArray, useField } from 'formik';
import { useIntl } from 'gatsby-plugin-intl';
import { format } from 'date-fns';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { Currency } from 'components/BeverageDetails/utils/enums';
import { FieldName } from 'dashboard/utils/enums';
import { ActionButtons, CurrencySelect, Plug } from '../elements';
import { Three as Grid } from '../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
};

const Price: React.FC<Props> = ({ fieldName, formName }) => {
  const { formatMessage } = useIntl();
  const [field] = useField(fieldName);

  const emptyPrice = {
    currency: {
      label: formatMessage({ id: `global.currency.${Currency.PLN}` }),
      value: Currency.PLN,
    },
    date: format(new Date(), 'dd.MM.yyyy'),
    value: 0,
  };

  return (
    <Grid>
      <Label name={fieldName} form={formName} />
      <FieldArray
        name={fieldName}
        render={({ form, push, remove }) => {
          const values = form.values[fieldName];
          const loopLength = values.length;

          if (values && loopLength) {
            return values.map((_: any, index: number) => (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={`${fieldName}-${index}`}>
                <div style={{ gridColumn: '2 / 3' }}>
                  <TextInput
                    disabled={field.value === null}
                    name={`${fieldName}.${index}.value`}
                    form={formName}
                    type="number"
                  />
                </div>
                <div style={{ gridColumn: '3 / 4' }}>
                  <CurrencySelect
                    name={`${fieldName}.${index}.currency`}
                    form={formName}
                  />
                </div>
                <div style={{ gridColumn: '4 / 5' }}>
                  <TextInput
                    disabled={field.value === null}
                    name={`${fieldName}.${index}.date`}
                    form={formName}
                  />
                </div>
                {loopLength === index + 1 && (
                  <ActionButtons
                    push={push}
                    pushContent={emptyPrice}
                    remove={() => remove(loopLength - 1)}
                    withRemove
                  />
                )}
              </React.Fragment>
            ));
          }

          return <Plug onClick={() => push(emptyPrice)} wide={3} />;
        }}
      />
    </Grid>
  );
};

export default Price;
