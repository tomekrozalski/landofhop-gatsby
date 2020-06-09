import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { FormikProps } from 'formik';

import { FormName } from 'utils/enums';
import { Button } from 'elements';
import { BeverageFieldNames, FormType } from 'dashboard/utils/enums';
import { BeverageContext } from 'dashboard/utils/contexts';
import { FormSection, SubSection } from '../elements';
import {
  Badge,
  Brand,
  Contract,
  Cooperation,
  Name,
  Place,
  Series,
} from '../fields';
import { Footer } from '../elements/grids';
import { FormValues } from './utils';

const FormBody: React.FC<FormikProps<FormValues>> = ({ isValid }) => {
  const { formType } = useContext(BeverageContext);
  const isUpdate = formType === FormType.update;

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
      <Footer>
        <Button type="submit" disabled={!isValid}>
          <FormattedMessage id="dashboard.continue" />
        </Button>
      </Footer>
    </FormSection>
  );
};

export default FormBody;
