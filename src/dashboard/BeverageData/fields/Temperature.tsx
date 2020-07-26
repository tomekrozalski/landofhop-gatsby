import React from 'react';
import { useField } from 'formik';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { TemperatureUnit } from 'components/BeverageDetails/utils/enums';
import { FieldName } from 'dashboard/utils/enums';
import { Condition, TemperatureUnitSelect } from '../elements';
import { ConditionalThree as Grid } from '../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
};

const Temperature: React.FC<Props> = ({ fieldName, formName }) => {
  const { formatMessage } = useIntl();
  const [field] = useField(fieldName);

  return (
    <Grid>
      <Label name={fieldName} form={formName} />
      <Condition
        name={fieldName}
        empty={{
          from: 0,
          to: 0,
          unit: {
            label: formatMessage({
              id: `global.temperatureUnit.${TemperatureUnit.celcius}`,
            }),
            value: TemperatureUnit.celcius,
          },
        }}
      />
      <TextInput
        disabled={field.value === null}
        name={`${fieldName}.from`}
        form={formName}
        type="number"
      />
      <TextInput
        disabled={field.value === null}
        name={`${fieldName}.to`}
        form={formName}
        type="number"
      />
      <TemperatureUnitSelect name={`${fieldName}.unit`} form={formName} />
    </Grid>
  );
};

export default Temperature;
