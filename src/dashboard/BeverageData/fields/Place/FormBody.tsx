import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { FormikProps } from 'formik';

import { FormName } from 'utils/enums';
import { Button } from 'elements';
import { PlaceFieldNames } from 'dashboard/utils/enums';
import { SubformWrapper } from 'dashboard/BeverageData/elements';
import { Footer } from 'dashboard/BeverageData/elements/grids';
import { FormValues } from './utils';
import { Brand, City, Country, Latitude, Longitude } from '..';

const FormBody: React.FC<FormikProps<FormValues>> = ({
  isSubmitting,
  isValid,
}) => (
  <SubformWrapper title="dashboard.addNewPlace.title">
    <City fieldName={PlaceFieldNames.city} formName={FormName.place} required />
    <Country
      fieldName={PlaceFieldNames.country}
      formName={FormName.place}
      required
    />
    <Brand
      fieldName={PlaceFieldNames.institution}
      formName={FormName.place}
      required
    />
    <Longitude
      fieldName={PlaceFieldNames.longitude}
      formName={FormName.place}
    />
    <Latitude fieldName={PlaceFieldNames.latitude} formName={FormName.place} />
    <Footer>
      <Button type="submit" disabled={!isValid} isSubmitting={isSubmitting}>
        <FormattedMessage id="dashboard.continue" />
      </Button>
    </Footer>
  </SubformWrapper>
);

export default FormBody;
