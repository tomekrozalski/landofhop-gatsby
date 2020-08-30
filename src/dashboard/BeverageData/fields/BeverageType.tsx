/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import React from 'react';
import { useField } from 'formik';
import { FormattedMessage } from 'gatsby-plugin-intl';
import classNames from 'classnames';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { BeverageType as BeverageTypeEnum } from 'components/BeverageDetails/utils/enums';
import { FieldName } from 'dashboard/utils/enums';
import { Condition, ListOfOptions } from '../elements';
import { Optional as Grid } from '../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
};

const BeverageType: React.FC<Props> = ({ fieldName, formName }) => {
  const [{ value }, , { setValue }] = useField(fieldName);

  const isDisabled = value === null;

  return (
    <Grid>
      <Label name={fieldName} form={formName} />
      <Condition name={fieldName} empty={BeverageTypeEnum.beer} />
      <ListOfOptions className={classNames({ disabled: isDisabled })}>
        <li>
          <input
            checked={value === BeverageTypeEnum.beer}
            disabled={isDisabled}
            id="beverage-type-beer"
            onChange={() => setValue(BeverageTypeEnum.beer)}
            type="radio"
          />
          <label htmlFor="beverage-type-beer">
            <FormattedMessage id="beverage.details.type.beer" />
          </label>
        </li>
        <li>
          <input
            checked={value === BeverageTypeEnum.radler}
            disabled={isDisabled}
            id="beverage-type-radler"
            onChange={() => setValue(BeverageTypeEnum.radler)}
            type="radio"
          />
          <label htmlFor="beverage-type-radler">
            <FormattedMessage id="beverage.details.type.radler" />
          </label>
        </li>
        <li>
          <input
            checked={value === BeverageTypeEnum.other}
            disabled={isDisabled}
            id="beverage-type-other"
            onChange={() => setValue(BeverageTypeEnum.other)}
            type="radio"
          />
          <label htmlFor="beverage-type-other">
            <FormattedMessage id="beverage.details.type.other" />
          </label>
        </li>
      </ListOfOptions>
    </Grid>
  );
};

export default BeverageType;
