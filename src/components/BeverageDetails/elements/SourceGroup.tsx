import React from 'react';
import styled from 'styled-components';

import { DataLanguage } from 'utils/enums';

export const SourceGroup = styled.span`
  font: var(--font-weight-light) 1.6rem / 2.2rem var(--font-primary);

  > span + span:not(.noSeparator) {
    &::before {
      content: ' / ';
    }
  }

  > span + .noSeparator {
    &::before {
      content: ' ';
    }
  }
`;

const GeneralWrapper = styled.span`
  background-position: 0 0.8em;
  background-repeat: repeat-x;
`;

const LabelWrapper = styled.span``;

const ProducerWrapper = styled(GeneralWrapper)`
  background-image: linear-gradient(
    var(--color-producer-light),
    var(--color-producer-light)
  );
`;

const EditorialWrapper = styled(GeneralWrapper)`
  background-image: linear-gradient(
    var(--color-editorial-light),
    var(--color-editorial-light)
  );
`;

export const Label: React.FC = ({ children }) => (
  <span>
    <LabelWrapper>{children}</LabelWrapper>
  </span>
);

export const Producer: React.FC = ({ children }) => (
  <span>
    <ProducerWrapper>{children}</ProducerWrapper>
  </span>
);

export const Editorial: React.FC<{ noSeparator?: boolean }> = ({
  children,
  noSeparator,
}) => (
  <span className={noSeparator ? 'noSeparator' : ''}>
    <EditorialWrapper>{children}</EditorialWrapper>
  </span>
);

export const SourceItem: React.FC<{ lang: DataLanguage | null }> = ({
  children,
  lang,
}) => (lang ? <em lang={lang}>{children}</em> : <em>{children}</em>);
