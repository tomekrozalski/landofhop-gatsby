import React, { useContext } from 'react';

import { BeverageContext } from 'utils/contexts';
import { FormSection } from '../elements';

const Label: React.FC = () => {
  const { badge } = useContext(BeverageContext);

  return (
    <FormSection
      description="dashboard.beverage.labelInfo.description"
      title="dashboard.beverage.labelInfo.title"
    >
      <div>Label, badge: {badge}</div>
    </FormSection>
  );
};

export default Label;
