/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import React from 'react';
import { useField } from 'formik';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { AgedWood as AgedWoodEnum } from 'components/BeverageDetails/utils/enums';
import { FieldName } from 'dashboard/utils/enums';
import { Condition, ListOfOptions } from '../../elements';

type Props = {
  fieldName: FieldName;
  index: number;
};

const AgedWood = ({ fieldName, index }: Props) => {
  const [{ value }, , { setValue }] = useField(fieldName);

  const setWood = (wood: AgedWoodEnum) =>
    setValue(
      value.map((item: { wood?: AgedWoodEnum }, i: number) =>
        i === index ? { ...item, wood } : item,
      ),
    );

  const isDisabled = value[index]?.wood === null;

  return (
    <div className="aged-wood">
      <Condition name={`${fieldName}.${index}.wood`} empty={AgedWoodEnum.oak} />
      <ListOfOptions className={isDisabled ? 'disabled' : ''}>
        <li>
          <input
            checked={value[index]?.wood === AgedWoodEnum.oak}
            disabled={isDisabled}
            onChange={() => setWood(AgedWoodEnum.oak)}
            type="radio"
            id={`aged-wood-${index}-${AgedWoodEnum.oak}`}
            name={`aged-wood-${index}`}
            value={AgedWoodEnum.oak}
          />
          <label htmlFor={`aged-wood-${index}-${AgedWoodEnum.oak}`}>
            <FormattedMessage id="beverage.details.aged.oak" />
          </label>
        </li>
        <li>
          <input
            checked={value[index]?.wood === AgedWoodEnum.beech}
            disabled={isDisabled}
            onChange={() => setWood(AgedWoodEnum.beech)}
            type="radio"
            id={`aged-wood-${index}-${AgedWoodEnum.beech}`}
            name={`aged-wood-${index}`}
            value={AgedWoodEnum.beech}
          />
          <label htmlFor={`aged-wood-${index}-${AgedWoodEnum.beech}`}>
            <FormattedMessage id="beverage.details.aged.beech" />
          </label>
        </li>
      </ListOfOptions>
    </div>
  );
};

export default AgedWood;
