import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { FormikProps } from 'formik';

import { FormName } from 'utils/enums';
import { Button } from 'elements';
import { BeverageFieldNames, FormType } from 'dashboard/utils/enums';
import { NavigationContext } from 'dashboard/utils/contexts';
import { FormSection, SubSection } from '../elements';
import {
  Badge,
  Barcode,
  Brand,
  Container,
  Contract,
  Cooperation,
  Name,
  Place,
  Series,
  Tale,
} from '../fields';
import { Footer } from '../elements/grids';
import { FormValues } from './utils';

const FormBody: React.FC<FormikProps<FormValues>> = ({ isValid }) => {
  const { beverageFormType } = useContext(NavigationContext);
  const isUpdate = beverageFormType === FormType.update;

  return (
    <FormSection
      description="dashboard.beverage.labelInfo.description"
      title="dashboard.beverage.labelInfo.title"
    >
      <Badge
        connectedFieldName={BeverageFieldNames.name}
        disabled={isUpdate}
        fieldName={BeverageFieldNames.badge}
        formName={FormName.beverageLabel}
        required
      />
      {/* -------------------------------- */}
      <SubSection title="dashboard.beverage.brandInfo" />
      <Name
        fieldName={BeverageFieldNames.name}
        formName={FormName.beverageLabel}
        required
      />
      <Series
        fieldName={BeverageFieldNames.series}
        formName={FormName.beverageLabel}
      />
      <Brand
        disabled={isUpdate}
        fieldName={BeverageFieldNames.brand}
        formName={FormName.beverageLabel}
        required
      />
      <Cooperation
        fieldName={BeverageFieldNames.cooperation}
        formName={FormName.beverageLabel}
      />
      <Contract
        fieldName={BeverageFieldNames.contract}
        formName={FormName.beverageLabel}
      />
      <Place
        fieldName={BeverageFieldNames.place}
        formName={FormName.beverageLabel}
      />
      <Tale
        fieldName={BeverageFieldNames.tale}
        formName={FormName.beverageLabel}
      />
      <Barcode
        fieldName={BeverageFieldNames.barcode}
        formName={FormName.beverageLabel}
      />
      {/* -------------------------------- */}
      <SubSection title="dashboard.beverage.otherInfo" />
      <Container
        fieldName={BeverageFieldNames.container}
        formName={FormName.beverageLabel}
        required
      />
      <Footer>
        <Button type="submit" disabled={!isValid}>
          <FormattedMessage id="dashboard.continue" />
        </Button>
      </Footer>
    </FormSection>
  );
};

export default FormBody;
