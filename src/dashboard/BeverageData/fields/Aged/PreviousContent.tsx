/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import React from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';

import { AgedPreviousContent } from 'components/BeverageDetails/utils/enums';
import { FieldName } from 'dashboard/utils/enums';
import { AgedPreviousContentSelect, Condition } from '../../elements';

type Props = {
  fieldName: FieldName;
  formName: FormName;
  index: number;
};

const PreviousContent = ({ fieldName, formName, index }: Props) => {
  const { formatMessage } = useIntl();

  return (
    <div className="aged-previous-content">
      <label>
        <FormattedMessage id="beverage.details.aged.previousContent.description" />
      </label>
      <div className="aged-previous-content-input-wrapper">
        <Condition
          name={`${fieldName}.${index}.previousContent`}
          empty={{
            label: formatMessage({
              id: `beverage.details.aged.previousContent.${AgedPreviousContent.redWine}`,
            }),
            value: AgedPreviousContent.redWine,
          }}
        />
        <AgedPreviousContentSelect
          form={formName}
          name={`${fieldName}.${index}.previousContent`}
        />
      </div>
    </div>
  );
};

export default PreviousContent;
