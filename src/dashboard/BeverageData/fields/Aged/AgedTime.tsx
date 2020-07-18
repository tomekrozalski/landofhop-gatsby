/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import React from 'react';
import { useField } from 'formik';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

import { TextInput } from 'elements';
import { FormName } from 'utils/enums';
import { AgedTimeUnit } from 'components/BeverageDetails/utils/enums';
import { FieldName } from 'dashboard/utils/enums';
import { AgedTimeUnitSelect, Condition } from '../../elements';

type Props = {
  fieldName: FieldName;
  formName: FormName;
  index: number;
};

const AgedTime = ({ fieldName, formName, index }: Props) => {
  const { formatMessage } = useIntl();
  const [{ value }] = useField(fieldName);

  console.log('--->', value);

  return (
    <div className="aged-time">
      <label>
        <FormattedMessage id="beverage.details.aged.timeOfAged" />
      </label>
      <div className="aged-time-input-wrapper">
        <Condition
          name={`${fieldName}.${index}.time`}
          empty={{
            value: 0,
            unit: {
              label: formatMessage({
                id: `global.timeUnit.${AgedTimeUnit.month}`,
              }),
              value: AgedTimeUnit.month,
            },
          }}
        />
        <TextInput
          disabled={value[index].time === null}
          name={`${fieldName}.${index}.time.value`}
          form={formName}
          type="number"
        />
        <AgedTimeUnitSelect
          disabled={value[index].time === null}
          name={`${fieldName}.${index}.time.unit`}
          form={formName}
        />
      </div>
    </div>
  );
};

export default AgedTime;
