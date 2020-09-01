import React, { useContext } from 'react';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';

import { BeverageContext } from 'components/BeverageDetails/utils/contexts';

const StyledNotes = styled(Markdown)`
  color: var(--color-darker);
`;

const Notes: React.FC = () => {
  const { notes } = useContext(BeverageContext);

  return notes ? <StyledNotes>{notes}</StyledNotes> : null;
};

export default Notes;
