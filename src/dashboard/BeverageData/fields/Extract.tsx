import React from 'react';
import { useField } from 'formik';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import {
  ExtractRelate,
  ExtractUnit,
} from 'components/BeverageDetails/utils/enums';
import { FieldName } from 'dashboard/utils/enums';
import { Condition, ExtractRelateSelect, ExtractUnitSelect } from '../elements';
import { ConditionalFour as Grid } from '../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
};

const Extract: React.FC<Props> = ({ fieldName, formName }) => {
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
              id: `global.extractRelate.${ExtractRelate.weight}`,
            }),
            value: ExtractRelate.weight,
          },
          unit: {
            label: formatMessage({
              id: `global.extractUnit.${ExtractUnit.percent}`,
            }),
            value: ExtractUnit.percent,
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
      <ExtractUnitSelect name={`${fieldName}.unit`} form={formName} />
      <ExtractRelateSelect name={`${fieldName}.relate`} form={formName} />
    </Grid>
  );
};

export default Extract;
