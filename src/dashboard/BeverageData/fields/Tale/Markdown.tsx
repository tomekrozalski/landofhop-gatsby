import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import MarkdownToJSX from 'markdown-to-jsx';
import { debounce } from 'lodash';

import { TaleValue } from './TaleValue.type';

const StyledMarkdown = styled(MarkdownToJSX)`
  grid-column: 2 / 3;
  grid-row: span 2;
  padding: 0 1rem;
  max-height: 28.6rem;
  overflow-y: scroll;
  border: 1px solid var(--color-producer-light);
`;

const MarkDown: React.FC<TaleValue> = ({ lang, value }) => {
  const [text, setText] = useState(value);

  const change = debounce(setText, 200);
  const handleChange = useCallback(change, []);

  useEffect(() => {
    handleChange(value);
  }, [value]);

  return <StyledMarkdown lang={lang.value}>{text}</StyledMarkdown>;
};

export default MarkDown;
