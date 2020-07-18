/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import React from 'react';
import { useField } from 'formik';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { AgedType as AgedTypeEnum } from 'components/BeverageDetails/utils/enums';
import { FieldName } from 'dashboard/utils/enums';
import { ListOfOptions } from '../../elements';
import { setType } from './utils';

type Props = {
  fieldName: FieldName;
  index: number;
};

const AgedType = ({ fieldName, index }: Props) => {
  const [{ value }, , { setValue }] = useField(fieldName);
  const onChange = setType({ index, setValue, value });

  return (
    <div className="aged-type">
      <ListOfOptions>
        <li>
          <input
            checked={!!value[index]?.type?.includes(AgedTypeEnum.barrel)}
            id={`aged-type-barrel-${index}`}
            onChange={onChange(AgedTypeEnum.barrel)}
            type="checkbox"
          />
          <label htmlFor={`aged-type-barrel-${index}`}>
            <FormattedMessage id="beverage.details.aged.barrel.unknown" />
          </label>
        </li>
        <li>
          <input
            checked={!!value[index]?.type?.includes(AgedTypeEnum.wood)}
            id={`aged-type-wood-${index}`}
            onChange={onChange(AgedTypeEnum.wood)}
            type="checkbox"
          />
          <label htmlFor={`aged-type-wood-${index}`}>
            <FormattedMessage id="beverage.details.aged.wood.unknown" />
          </label>
        </li>
      </ListOfOptions>
    </div>
  );
};

export default AgedType;
