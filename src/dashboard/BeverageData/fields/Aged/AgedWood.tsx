/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import React from 'react';
import { useField } from 'formik';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { AgedWood as AgedWoodEnum } from 'components/BeverageDetails/utils/enums';
import { FieldName } from 'dashboard/utils/enums';
import { ListOfOptions } from '../../elements';
import { setWood } from './utils';

type Props = {
  fieldName: FieldName;
  index: number;
};

const AgedWood = ({ fieldName, index }: Props) => {
  const [{ value }, , { setValue }] = useField(fieldName);
  const onChange = setWood({ index, setValue, value });

  return (
    <div className="aged-type">
      <ListOfOptions>
        <li>
          <input
            checked={!!value[index]?.wood?.includes(AgedWoodEnum.oak)}
            id={`aged-wood-oak-${index}`}
            onChange={onChange(AgedWoodEnum.oak)}
            type="checkbox"
          />
          <label htmlFor={`aged-wood-oak-${index}`}>
            <FormattedMessage id="beverage.details.aged.oak" />
          </label>
        </li>
        <li>
          <input
            checked={!!value[index]?.wood?.includes(AgedWoodEnum.beech)}
            id={`aged-wood-beech-${index}`}
            onChange={onChange(AgedWoodEnum.beech)}
            type="checkbox"
          />
          <label htmlFor={`aged-wood-beech-${index}`}>
            <FormattedMessage id="beverage.details.aged.beech" />
          </label>
        </li>
      </ListOfOptions>
    </div>
  );
};

export default AgedWood;
