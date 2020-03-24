import styled from 'styled-components';

const DropZoneWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 500px;
  position: relative;
  cursor: pointer;

  svg {
    height: 140px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;

    .dark {
      fill: var(--color-bright);
      transition: fill var(--transition-default);
    }

    .movable {
      transition: transform 0.2s;
    }
  }

  :hover,
  :focus {
    outline: none;

    svg {
      .dark {
        fill: var(--color-dark);
      }

      .movable {
        transform: translate(224px, -104px);
      }
    }
  }
`;

export default DropZoneWrapper;
