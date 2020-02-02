import React from 'react';
import styled from 'styled-components';

import { Added } from '.';

const FootNotesWrapper = styled.div`
	grid-area: footnotes;
	margin: 1rem 0;
	color: var(--color-darker);

  ::first-letter {
    text-transform: uppercase;
  }

  dt {
    display: inline;
  }

  dt::after {
    content: ': ';
  }

  dd {
    display: inline;
    margin: 0;
    padding: 0;
  }

  dd:not(:last-of-type)::after {
    content: ', ';
  }
`;

const FootNotes: React.FC = () => (
	<FootNotesWrapper>
		<Added />
	</FootNotesWrapper>
);

export default FootNotes;
