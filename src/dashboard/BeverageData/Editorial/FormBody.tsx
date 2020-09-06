import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { FormikProps } from 'formik';

import { FormName } from 'utils/enums';
import { Button } from 'elements';
import { BeverageFieldNames } from 'dashboard/utils/enums';
import { NavigationContext } from 'dashboard/utils/contexts';
import { FormSection, SubSection } from '../elements';
import {
  Added,
  Aged,
  AlcoholScope,
  BeverageType,
  Clarity,
  Color,
  Contract,
  Cooperation,
  DryHopped,
  Fermentation,
  Filtration,
  Notes,
  Pasteurization,
  Place,
  Price,
  Remark,
  Style,
  Updated,
} from '../fields';
import { Footer } from '../elements/grids';
import { FormValues } from './utils';

const FormBody: React.FC<FormikProps<FormValues>> = ({
  isSubmitting,
  isValid,
  values,
}) => {
  const { saveEditorial, setPart } = useContext(NavigationContext);

  const moveBack = (e: React.MouseEvent) => {
    e.preventDefault();

    saveEditorial(values);
    setPart(FormName.beverageProducer);
  };

  return (
    <FormSection
      description="dashboard.beverage.editorialInfo.description"
      title="dashboard.beverage.editorialInfo.title"
    >
      {/* -------------------------------- */}
      <SubSection title="dashboard.beverage.brandInfo" />
      <Cooperation
        fieldName={BeverageFieldNames.cooperation}
        formName={FormName.beverageEditorial}
      />
      <Contract
        fieldName={BeverageFieldNames.contract}
        formName={FormName.beverageEditorial}
      />
      <Place
        fieldName={BeverageFieldNames.place}
        formName={FormName.beverageEditorial}
      />
      <Remark
        fieldName={BeverageFieldNames.remark}
        formName={FormName.beverageEditorial}
      />
      {/* -------------------------------- */}
      <SubSection title="dashboard.beverage.brewingInfo" />
      <BeverageType
        fieldName={BeverageFieldNames.beverageType}
        formName={FormName.beverageEditorial}
      />
      <Fermentation
        fieldName={BeverageFieldNames.fermentation}
        formName={FormName.beverageEditorial}
      />
      <Style
        fieldName={BeverageFieldNames.style}
        formName={FormName.beverageEditorial}
      />
      <AlcoholScope
        fieldName={BeverageFieldNames.alcoholScope}
        formName={FormName.beverageEditorial}
      />
      <Filtration
        fieldName={BeverageFieldNames.filtration}
        formName={FormName.beverageEditorial}
      />
      <Pasteurization
        fieldName={BeverageFieldNames.pasteurization}
        formName={FormName.beverageEditorial}
      />
      <Aged
        fieldName={BeverageFieldNames.aged}
        formName={FormName.beverageEditorial}
      />
      <DryHopped
        fieldName={BeverageFieldNames.dryHopped}
        formName={FormName.beverageEditorial}
      />
      {/* -------------------------------- */}
      <SubSection title="dashboard.beverage.impressionsInfo" />
      <Color
        fieldName={BeverageFieldNames.color}
        formName={FormName.beverageEditorial}
      />
      <Clarity
        fieldName={BeverageFieldNames.clarity}
        formName={FormName.beverageEditorial}
      />
      {/* -------------------------------- */}
      <SubSection title="dashboard.beverage.otherInfo" />
      <Price
        fieldName={BeverageFieldNames.price}
        formName={FormName.beverageEditorial}
      />
      <Added
        fieldName={BeverageFieldNames.added}
        formName={FormName.beverageEditorial}
      />
      <Updated
        fieldName={BeverageFieldNames.updated}
        formName={FormName.beverageEditorial}
      />
      <Notes
        fieldName={BeverageFieldNames.notes}
        formName={FormName.beverageEditorial}
      />
      <Footer>
        <Button
          appearance="moveBack"
          type="submit"
          onClick={moveBack}
          disabled={!isValid}
        >
          <FormattedMessage id="dashboard.saveAndMoveBack" />
        </Button>
        <Button type="submit" disabled={!isValid} isSubmitting={isSubmitting}>
          <FormattedMessage id="dashboard.continue" />
        </Button>
      </Footer>
    </FormSection>
  );
};

export default FormBody;
