import styled from 'styled-components';

const TestimonyWrapper = styled.dl`
	grid-area: testimony;
	margin: 1rem 0;

  ::first-letter {
    text-transform: uppercase;
  }

  dt {
    display: inline;
  }

  dt::after {
    content: ': ';
  }

  dd {
    display: inline;
    margin: 0;
    padding: 0;
  }

  dd:not(:last-of-type)::after {
    content: ', ';
  }
`;

export default TestimonyWrapper;
