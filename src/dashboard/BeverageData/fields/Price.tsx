import React from 'react';
import { useField } from 'formik';
import { useIntl } from 'gatsby-plugin-intl';
import { format } from 'date-fns';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { Currency } from 'components/BeverageDetails/utils/enums';
import { FieldName } from 'dashboard/utils/enums';
import { Condition, CurrencySelect } from '../elements';
import { ConditionalThree as Grid } from '../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
};

const Price: React.FC<Props> = ({ fieldName, formName }) => {
  const { formatMessage } = useIntl();
  const [field] = useField(fieldName);

  return (
    <Grid>
      <Label name={fieldName} form={formName} />
      <Condition
        name={fieldName}
        empty={{
          currency: {
            label: formatMessage({ id: `global.currency.${Currency.PLN}` }),
            value: Currency.PLN,
          },
          date: format(new Date(), 'dd.MM.yyyy'),
          value: 0,
        }}
      />
      <TextInput
        disabled={field.value === null}
        name={`${fieldName}.value`}
        form={formName}
        type="number"
      />
      <CurrencySelect name={`${fieldName}.currency`} form={formName} />
      <TextInput
        disabled={field.value === null}
        name={`${fieldName}.date`}
        form={formName}
      />
    </Grid>
  );
};

export default Price;
