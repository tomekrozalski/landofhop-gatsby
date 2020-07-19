/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import React from 'react';
import { useField } from 'formik';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { AgedType as AgedTypeEnum } from 'components/BeverageDetails/utils/enums';
import { FieldName } from 'dashboard/utils/enums';
import { Condition, ListOfOptions } from '../../elements';

type Props = {
  fieldName: FieldName;
  index: number;
};

const AgedType = ({ fieldName, index }: Props) => {
  const [{ value }, , { setValue }] = useField(fieldName);

  const setType = (type: AgedTypeEnum) =>
    setValue(
      value.map((item: { type?: AgedTypeEnum }, i: number) =>
        i === index ? { ...item, type } : item,
      ),
    );

  const isDisabled = value[index]?.type === null;

  return (
    <div className="aged-type">
      <Condition
        name={`${fieldName}.${index}.type`}
        empty={AgedTypeEnum.barrel}
      />
      <ListOfOptions className={isDisabled ? 'disabled' : ''}>
        <li>
          <input
            checked={value[index]?.type === AgedTypeEnum.barrel}
            disabled={isDisabled}
            onChange={() => setType(AgedTypeEnum.barrel)}
            type="radio"
            id={`aged-type-${index}-${AgedTypeEnum.barrel}`}
            name={`aged-type-${index}`}
            value={AgedTypeEnum.barrel}
          />
          <label htmlFor={`aged-type-${index}-${AgedTypeEnum.barrel}`}>
            <FormattedMessage id="beverage.details.aged.barrel.unknown" />
          </label>
        </li>
        <li>
          <input
            checked={value[index]?.type === AgedTypeEnum.wood}
            disabled={isDisabled}
            onChange={() => setType(AgedTypeEnum.wood)}
            type="radio"
            id={`aged-type-${index}-${AgedTypeEnum.wood}`}
            name={`aged-type-${index}`}
            value={AgedTypeEnum.wood}
          />
          <label htmlFor={`aged-type-${index}-${AgedTypeEnum.wood}`}>
            <FormattedMessage id="beverage.details.aged.wood.unknown" />
          </label>
        </li>
      </ListOfOptions>
    </div>
  );
};

export default AgedType;
