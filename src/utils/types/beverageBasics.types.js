import { arrayOf, number, shape, string, oneOf } from 'prop-types';

import { container } from 'utils/constants';
import languageValue from './languageValue.types';

export default {
  badge: string.isRequired,
  editorial: shape({
    photos: shape({
      cover: shape({
        height: number,
        width: number,
      }),
    }),
  }),
  label: shape({
    container: shape({
      type: oneOf(Object.values(container.types)).isRequired,
    }).isRequired,
    general: shape({
      brand: shape({
        badge: string.isRequired,
        name: arrayOf(languageValue).isRequired,
      }).isRequired,
      name: arrayOf(languageValue).isRequired,
    }).isRequired,
  }).isRequired,
  mongodb_id: string.isRequired,
  shortId: string.isRequired,
};
