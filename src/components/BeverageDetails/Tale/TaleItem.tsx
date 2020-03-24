import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { LanguageValue } from 'utils/types';
import { getLangAttr } from 'utils/helpers';

const TaleItemWrapper = styled.div<{ producer: boolean }>`
  position: relative;

  ${({ producer }) =>
    producer &&
    `
		&::before {
			display: block;
			width: calc(100% + 2rem);
			height: calc(100% + 1rem);
			content: '';
			background: repeating-linear-gradient(
				-55deg,
				#fff,
				#fff 20px,
				var(--color-producer-lightest) 20px,
				var(--color-producer-lightest) 40px
			);
			position: absolute;
			top: -0.5rem;
			left: -1rem;
			z-index: -1;
		}
	`}

  & + & {
    margin-top: 1rem;
  }

  button {
    margin-left: 0.2rem;
    padding: 0;
    color: var(--color-success-strong);
    border-bottom: 1px solid transparent;
    transition: color var(--transition-default),
      border-color var(--transition-default);

    :hover {
      color: var(--color-black);
      border-color: var(--color-success-strong);
    }
  }
`;

type Props = LanguageValue & { producer?: boolean };

const TaleItem: React.FC<Props> = ({ language, producer = false, value }) => {
  const slicedText =
    value
      .split('.')
      .slice(0, 3)
      .join('.') + '.';
  const sentences = value.split('.').length - 1;

  const [expanded, setExpanded] = useState(false);
  const [text, setText] = useState(sentences > 3 ? slicedText : value);

  useEffect(() => {
    if (sentences > 3) {
      setText(expanded ? value : slicedText);
    }
  }, [expanded]);

  const toggle = () => {
    setExpanded(!expanded);
  };

  return (
    <TaleItemWrapper lang={getLangAttr(language)} producer={producer}>
      <Markdown>{text}</Markdown>
      {sentences > 3 && (
        <button onClick={toggle}>
          <FormattedMessage
            id={`beverage.details.tale.${expanded ? 'readLess' : 'readMore'}`}
          />
        </button>
      )}
    </TaleItemWrapper>
  );
};

export default TaleItem;
