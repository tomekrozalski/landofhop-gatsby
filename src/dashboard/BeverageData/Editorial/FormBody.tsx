import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { FormikProps } from 'formik';

import { FormName } from 'utils/enums';
import { Button } from 'elements';
import { BeverageFieldNames } from 'dashboard/utils/enums';
import { NavigationContext } from 'dashboard/utils/contexts';
import { FormSection, SubSection } from '../elements';
import { Added, Notes, Updated } from '../fields';
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
      <SubSection title="dashboard.beverage.otherInfo" />
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
