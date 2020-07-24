import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { FormikProps } from 'formik';

import { FormName } from 'utils/enums';
import { Button } from 'elements';
import { IngredientFieldNames } from 'dashboard/utils/enums';
import { SubformWrapper } from 'dashboard/BeverageData/elements';
import { Badge, IngredientType, Name } from 'dashboard/BeverageData/fields';
import { Footer } from 'dashboard/BeverageData/elements/grids';
import { FormValues } from './utils';

const FormBody: React.FC<FormikProps<FormValues>> = ({
  isSubmitting,
  isValid,
}) => (
  <SubformWrapper title="dashboard.addNewIngredient.title">
    <Badge
      connectedFieldName={IngredientFieldNames.name}
      fieldName={IngredientFieldNames.badge}
      formName={FormName.ingredient}
      required
    />
    <Name
      fieldName={IngredientFieldNames.name}
      formName={FormName.ingredient}
      required
    />
    <IngredientType
      fieldName={IngredientFieldNames.type}
      formName={FormName.ingredient}
      required
    />
    <Footer>
      <Button type="submit" disabled={!isValid} isSubmitting={isSubmitting}>
        <FormattedMessage id="dashboard.add" />
      </Button>
    </Footer>
  </SubformWrapper>
);

export default FormBody;
