import React, { useContext } from 'react';
import styled from 'styled-components';

import { Subform as SubformEnum } from 'dashboard/utils/enums';
import { NavigationContext } from 'dashboard/utils/contexts';
import { OpenSubform } from '../..';

const Wrapper = styled.aside`
  width: 300px;
  border-left: 1px solid var(--color-black);
  padding: 1rem 2rem;
  position: relative;
`;

const LanguageWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const Aside = () => {
  const { setSubform } = useContext(NavigationContext);

  return (
    <Wrapper>
      <LanguageWrapper>
        <OpenSubform
          direction="right"
          icon="language"
          label="dashboard.addNewLanguage.openButton"
          onClick={() => setSubform(SubformEnum.institution)}
        />
      </LanguageWrapper>
    </Wrapper>
  );
};

export default Aside;
