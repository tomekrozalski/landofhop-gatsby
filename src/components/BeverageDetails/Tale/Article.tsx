import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { Button } from '.';

const ContentWrapper = styled.div`
  height: 0;
  transition: height var(--transition-default);
  overflow: hidden;
`;

type Props = {
  content: string;
};

const Article = ({ content }: Props) => {
  const contentWrapperRef = useRef<HTMLDivElement>(null!);
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleContent = () => {
    const contentWrapper = contentWrapperRef.current;
    contentWrapper.style.height = isCollapsed
      ? '0'
      : `${contentWrapper.scrollHeight}px`;
    setCollapsed(!isCollapsed);
  };

  return (
    <>
      <ContentWrapper ref={contentWrapperRef}>
        <Markdown>{content}</Markdown>
      </ContentWrapper>
      <Button type="button" onClick={toggleContent}>
        <FormattedMessage
          id={`beverage.details.tale.${isCollapsed ? 'readLess' : 'readMore'}`}
        />
      </Button>
    </>
  );
};

export default Article;
