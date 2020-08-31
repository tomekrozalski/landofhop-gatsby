import React, { useContext } from 'react';

import { Subform as SubformEnum } from 'dashboard/utils/enums';
import { NavigationContext } from 'dashboard/utils/contexts';
import { OpenSubform } from '../..';
import { BackToDetails, Wrapper } from '.';

const Aside: React.FC = () => {
  const { link, setSubform } = useContext(NavigationContext);

  return (
    <Wrapper>
      {link && <BackToDetails link={link} />}
      <OpenSubform
        direction="right"
        icon="language"
        label="dashboard.addNewLanguage.openButton"
        onClick={() => setSubform(SubformEnum.language)}
      />
    </Wrapper>
  );
};

export default Aside;
