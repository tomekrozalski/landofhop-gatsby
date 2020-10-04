import styled from 'styled-components';

const TaleItemWrapper = styled.div`
  position: relative;

  .tale-item--producer::before {
    display: block;
    width: calc(100% + 2rem);
    height: calc(100% + 1rem);
    content: '';
    background: repeating-linear-gradient(
      -55deg,
      #fff,
      #fff 20px,
      var(--color-producer-lightest) 20px,
      var(--color-producer-lightest) 40px
    );
    position: absolute;
    top: -0.5rem;
    left: -1rem;
    z-index: -1;
  }

  & + & {
    margin-top: 1rem;
  }
`;

export default TaleItemWrapper;
