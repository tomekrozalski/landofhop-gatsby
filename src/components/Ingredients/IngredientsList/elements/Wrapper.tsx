import styled from 'styled-components';

const Wrapper = styled.ul`
  li {
    margin: 0.5rem 0 0.5rem 2rem;
    list-style-type: square;
    position: relative;
  }

  li li {
    list-style-type: circle;
  }
`;

export default Wrapper;
