import { arrayOf, number, shape, string, oneOf } from 'prop-types';

import { container } from 'utils/constants';

export default {
  badge: string.isRequired,
  editorial: shape({
    photos: shape({
      cover: shape({
        height: number.isRequired,
        width: number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  label: shape({
    container: shape({
      type: oneOf(Object.values(container.types)).isRequired,
    }).isRequired,
    general: shape({
      brand: shape({
        badge: string.isRequired,
        name: arrayOf(
          shape({
            language: string.isRequired,
            value: string.isRequired,
          }).isRequired
        ).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  mongodb_id: string.isRequired,
  shortId: string.isRequired,
};
