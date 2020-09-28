import React, { useContext } from 'react';

import { getLangAttr } from 'utils/helpers';
import { BeverageContext } from 'components/BeverageDetails/utils/contexts';
import {
  Label,
  Producer,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

const Remark: React.FC = () => {
  const { remark } = useContext(BeverageContext);

  return remark ? (
    <>
      <SourceGroup>
        {remark.label && (
          <Label>
            <SourceItem lang={getLangAttr(remark.label.language)}>
              {remark.label.value}
            </SourceItem>
          </Label>
        )}
        {remark.producer && (
          <Producer>
            <SourceItem lang={getLangAttr(remark.producer.language)}>
              {remark.producer.value}
            </SourceItem>
          </Producer>
        )}
      </SourceGroup>
    </>
  ) : null;
};

export default Remark;
