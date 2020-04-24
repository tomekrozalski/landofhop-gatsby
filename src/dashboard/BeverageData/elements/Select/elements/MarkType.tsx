import styled from 'styled-components';

const MarkType = styled.div<{ type?: string }>`
  position: relative;

  &::after {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);

    ${({ type }) => {
      if (type === 'hop') {
        return `
					content: '';
					background: var(--color-ingredients-hop);
				`;
      }

      if (type === 'malt') {
        return `
					content: '';
					background: var(--color-ingredients-malt);
				`;
      }

      if (type === 'appendix') {
        return `
					content: '';
					background: var(--color-ingredients-appendix);
				`;
      }

      if (type === 'yeast') {
        return `
					content: '';
					background: var(--color-dark);
				`;
      }

      return '';
    }}
  }
`;

export default MarkType;
