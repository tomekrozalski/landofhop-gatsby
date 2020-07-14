import React from 'react';
import { useField } from 'formik';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import {
  AlcoholRelate,
  AlcoholUnit,
} from 'components/BeverageDetails/utils/enums';
import { FieldName } from 'dashboard/utils/enums';
import {
  Condition,
  AlcoholRelateSelect,
  AlcoholScopeSelect,
  AlcoholUnitSelect,
} from '../elements';
import { ConditionalFour as Grid } from '../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
};

const Alcohol: React.FC<Props> = ({ fieldName, formName }) => {
  const { formatMessage } = useIntl();
  const [field] = useField(fieldName);

  return (
    <Grid>
      <Label name={fieldName} form={formName} />
      <Condition
        name={fieldName}
        empty={{
          relate: {
            label: formatMessage({
              id: `global.alcoholRelate.${AlcoholRelate.capacity}`,
            }),
            value: AlcoholRelate.capacity,
          },
          scope: {
            label: '--',
            value: '-',
          },
          unit: {
            label: formatMessage({
              id: `global.alcoholUnit.${AlcoholUnit.percent}`,
            }),
            value: AlcoholUnit.percent,
          },
          value: 0,
        }}
      />
      <TextInput
        disabled={field.value === null}
        name={`${fieldName}.value`}
        form={formName}
        type="number"
      />
      <AlcoholUnitSelect name={`${fieldName}.unit`} form={formName} />
      <AlcoholRelateSelect name={`${fieldName}.relate`} form={formName} />
      <AlcoholScopeSelect name={`${fieldName}.scope`} form={formName} />
    </Grid>
  );
};

export default Alcohol;
