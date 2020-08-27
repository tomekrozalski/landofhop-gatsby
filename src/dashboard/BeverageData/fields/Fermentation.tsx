/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import React from 'react';
import { useField } from 'formik';
import classNames from 'classnames';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { Fermentation as FermentationEnum } from 'components/BeverageDetails/utils/enums';
import { FieldName } from 'dashboard/utils/enums';
import { Condition, ListOfOptions } from '../elements';
import { Optional as Grid } from '../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
};

const Fermentation: React.FC<Props> = ({ fieldName, formName }) => {
  const [{ value }, , { setValue }] = useField(fieldName);

  const onOptionChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    type: FermentationEnum,
  ) => {
    if (target.checked) {
      setValue([...value, type]);
    } else {
      setValue(value.filter((item: FermentationEnum) => item !== type));
    }
  };

  const isDisabled = value === null;

  return (
    <Grid>
      <Label name={fieldName} form={formName} />
      <Condition name={fieldName} empty={[FermentationEnum.top]} />
      <ListOfOptions
        className={classNames('multivalue', { disabled: isDisabled })}
      >
        <li>
          <input
            checked={!!value?.includes(FermentationEnum.top)}
            disabled={isDisabled}
            id="fermentation-top"
            onChange={e => onOptionChange(e, FermentationEnum.top)}
            type="checkbox"
          />
          <label htmlFor="fermentation-top">
            <FormattedMessage id="beverage.fermentationType.top" />
          </label>
        </li>
        <li>
          <input
            checked={!!value?.includes(FermentationEnum.bottom)}
            disabled={isDisabled}
            id="fermentation-bottom"
            onChange={e => onOptionChange(e, FermentationEnum.bottom)}
            type="checkbox"
          />
          <label htmlFor="fermentation-bottom">
            <FormattedMessage id="beverage.fermentationType.bottom" />
          </label>
        </li>
        <li>
          <input
            checked={!!value?.includes(FermentationEnum.spontaneous)}
            disabled={isDisabled}
            id="fermentation-spontaneous"
            onChange={e => onOptionChange(e, FermentationEnum.spontaneous)}
            type="checkbox"
          />
          <label htmlFor="fermentation-spontaneous">
            <FormattedMessage id="beverage.fermentationType.spontaneous" />
          </label>
        </li>
      </ListOfOptions>
    </Grid>
  );
};

export default Fermentation;
