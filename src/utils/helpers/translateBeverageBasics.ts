import { useIntl } from 'gatsby-plugin-intl';
import {
	BeverageBasics as BeverageBasicsTypes,
	BeverageBasicsTranslated as BeverageBasicsTranslatedTypes
} from 'utils/types';
import { getValueByLanguage } from '.';

const translateBeverageBasics = ({ name, brand, ...rest }: BeverageBasicsTypes): BeverageBasicsTranslatedTypes => {
	const { locale } = useIntl();

	return {
		name: getValueByLanguage(name, locale),
		brand: {
			badge: brand.badge,
			name: getValueByLanguage(brand.name, locale),
			shortId: brand.shortId,
			...(brand.website && { website: brand.website }),
			...(brand.consortium && { consortium: getValueByLanguage(brand.consortium, locale) }),
		},
		...rest,
	}
};

export default translateBeverageBasics;
