import React from 'react';
import Markdown from 'markdown-to-jsx';

import { getLangAttr } from 'utils/helpers';
import { Article, TaleItemWrapper } from '.';

type Props = {
  article: string | null;
  language: string | null;
  lead: string;
  producer?: boolean;
};

const TaleItem: React.FC<Props> = ({
  language,
  producer = false,
  lead,
  article,
}) => (
  <TaleItemWrapper
    lang={getLangAttr(language)}
    className={producer ? 'tale-item--producer' : ''}
  >
    <Markdown>{lead}</Markdown>
    {article && <Article content={article} />}
  </TaleItemWrapper>
);

export default TaleItem;
