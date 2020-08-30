import React from 'react';
import { useField } from 'formik';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { HopRateUnit } from 'components/BeverageDetails/utils/enums';
import { FieldName } from 'dashboard/utils/enums';
import { Condition, HopRateUnitSelect } from '../elements';
import { ConditionalDouble as Grid } from '../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
};

const HopRate: React.FC<Props> = ({ fieldName, formName }) => {
  const { formatMessage } = useIntl();
  const [field] = useField(fieldName);

  return (
    <Grid>
      <Label name={fieldName} form={formName} />
      <Condition
        name={fieldName}
        empty={{
          value: 0,
          unit: {
            label: formatMessage({
              id: `global.hopRateUnit.${HopRateUnit.gl}`,
            }),
            value: HopRateUnit.gl,
          },
        }}
      />
      <TextInput
        disabled={field.value === null}
        name={`${fieldName}.value`}
        form={formName}
        type="number"
      />
      <HopRateUnitSelect name={`${fieldName}.unit`} form={formName} />
    </Grid>
  );
};

export default HopRate;
