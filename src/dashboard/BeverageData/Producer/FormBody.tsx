import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { FormikProps } from 'formik';

import { FormName } from 'utils/enums';
import { Button } from 'elements';
import { BeverageFieldNames } from 'dashboard/utils/enums';
import { NavigationContext } from 'dashboard/utils/contexts';
import { FormSection, SubSection } from '../elements';
import {
  Aged,
  Alcohol,
  Contract,
  Cooperation,
  DryHopped,
  ExpirationDate,
  Extract,
  Fermentation,
  Filtration,
  Pasteurization,
  Place,
  Series,
  Style,
  Tale,
} from '../fields';
import { Footer } from '../elements/grids';
import { FormValues } from './utils';

const FormBody: React.FC<FormikProps<FormValues>> = ({ isValid, values }) => {
  const { saveProducer, setPart } = useContext(NavigationContext);

  const moveBack = (e: React.MouseEvent) => {
    e.preventDefault();

    saveProducer(values);
    setPart(FormName.beverageLabel);
  };

  return (
    <FormSection
      description="dashboard.beverage.producerInfo.description"
      title="dashboard.beverage.producerInfo.title"
    >
      {/* -------------------------------- */}
      <SubSection title="dashboard.beverage.brandInfo" />
      <Series
        fieldName={BeverageFieldNames.series}
        formName={FormName.beverageProducer}
      />
      <Cooperation
        fieldName={BeverageFieldNames.cooperation}
        formName={FormName.beverageProducer}
      />
      <Contract
        fieldName={BeverageFieldNames.contract}
        formName={FormName.beverageProducer}
      />
      <Place
        fieldName={BeverageFieldNames.place}
        formName={FormName.beverageProducer}
      />
      <Tale
        fieldName={BeverageFieldNames.tale}
        formName={FormName.beverageProducer}
      />
      {/* -------------------------------- */}
      <SubSection title="dashboard.beverage.brewingInfo" />
      <Fermentation
        fieldName={BeverageFieldNames.fermentation}
        formName={FormName.beverageProducer}
      />
      <Style
        fieldName={BeverageFieldNames.style}
        formName={FormName.beverageProducer}
      />
      <Extract
        fieldName={BeverageFieldNames.extract}
        formName={FormName.beverageProducer}
      />
      <Alcohol
        fieldName={BeverageFieldNames.alcohol}
        formName={FormName.beverageProducer}
      />
      <Filtration
        fieldName={BeverageFieldNames.filtration}
        formName={FormName.beverageProducer}
      />
      <Pasteurization
        fieldName={BeverageFieldNames.pasteurization}
        formName={FormName.beverageProducer}
      />
      <Aged
        fieldName={BeverageFieldNames.aged}
        formName={FormName.beverageProducer}
      />
      <DryHopped
        fieldName={BeverageFieldNames.dryHopped}
        formName={FormName.beverageProducer}
      />
      <ExpirationDate
        fieldName={BeverageFieldNames.expirationDate}
        formName={FormName.beverageProducer}
      />
      {/* -------------------------------- */}
      <Footer>
        <Button
          appearance="moveBack"
          type="submit"
          onClick={moveBack}
          disabled={!isValid}
        >
          <FormattedMessage id="dashboard.saveAndMoveBack" />
        </Button>
        <Button type="submit" disabled={!isValid}>
          <FormattedMessage id="dashboard.continue" />
        </Button>
      </Footer>
    </FormSection>
  );
};

export default FormBody;
