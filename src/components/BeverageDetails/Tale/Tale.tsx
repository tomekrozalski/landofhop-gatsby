import React, { useContext } from 'react';
import styled from 'styled-components';

import { BeverageContext } from 'components/BeverageDetails/utils/contexts';
import { TaleItem } from '.';

const TaleWrapper = styled.div`
  grid-area: tale;
`;

const Tale: React.FC = () => {
  const { tale } = useContext(BeverageContext);

  return (
    <TaleWrapper>
      {tale && (
        <>
          {tale.label &&
            tale.label.map(props => <TaleItem key={props.value} {...props} />)}
          {tale.producer && <TaleItem {...tale.producer} producer />}
        </>
      )}
    </TaleWrapper>
  );
};

export default Tale;
