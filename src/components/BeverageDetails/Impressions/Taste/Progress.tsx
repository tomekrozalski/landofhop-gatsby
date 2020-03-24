import styled from 'styled-components';

const Progress = styled.progress.attrs({
  max: 100,
})<{ producer?: boolean }>`
  display: block;
  height: 0.3rem;
  width: 100%;
  border: 0;
  background-color: #eee;

  & + & {
    margin-top: 0.2rem;
  }

  &[value]::-webkit-progress-value,
  &[value]::-moz-progress-bar {
    background-color: ${({ producer }) =>
      producer
        ? 'var(--color-producer-strong)'
        : 'var(--color-success-strong)'};
    border-radius: 2px;
  }
`;

export default Progress;
