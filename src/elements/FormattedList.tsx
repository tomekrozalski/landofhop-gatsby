import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import isArray from 'lodash/isArray';

type Props = {
	style: 'long' | 'short' | 'narrow',
	type: 'conjunction',
}

const FormattedList: React.FC<Props> = ({ children, style }) => {
	if (children && isArray(children)) {
		if (style === 'narrow') {
			return (
				<>
					{children.flatMap(item => [item, ', ']).slice(0, -1)}
				</>
			)
		}

		if (style === 'short') {
			return (
				<>
					{
						children.flatMap((item, index) => [
							item,
							index === children.length - 2
								? <FormattedMessage id="formattedList.conjunction.short" key={item} />
								: ', '
						]).slice(0, -1)
					}
				</>
			)
		}

		return (
			<>
				{
					children.flatMap((item, index) => [
						item,
						index === children.length - 2
							? <FormattedMessage id="formattedList.conjunction.long" key={item} />
							: ', '
					]).slice(0, -1)
				}
			</>
		)
	}

	return null;
}

export default FormattedList;
