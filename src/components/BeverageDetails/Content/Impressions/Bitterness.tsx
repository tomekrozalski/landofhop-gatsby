import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import isNumber from 'lodash/isNumber';

import { BeverageContext } from 'components/BeverageDetails';
import { Progress } from '.';

const Bitterness: React.FC = () => {
	const { bitterness } = useContext(BeverageContext);

	return bitterness ? (
		<>
			<dt><FormattedMessage id="beverage.details.bitterness" /></dt>
			<dd>
				{isNumber(bitterness.label) &&
					<Progress value={bitterness.label}>{bitterness.label}%</Progress>}
				{isNumber(bitterness.producer) &&
					<Progress value={bitterness.producer} producer>{bitterness.producer}%</Progress>}
			</dd>
		</>
	) : null;
}

export default Bitterness;
