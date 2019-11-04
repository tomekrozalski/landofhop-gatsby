import styled from 'styled-components';

export default styled.div`
  display: flex;
  width: 100%;
  height: var(--size-loginbar-height);
  background-color: var(--color-brighter);
  position: fixed;
  top: 0;
  transform: translateY(
    ${({ isActive, isNavbar }) => {
      if (!isNavbar) {
        return 'calc(var(--size-header-height) - var(--size-loginbar-height))';
      }

      return isActive
        ? 'var(--size-navbar-height)'
        : 'calc(var(--size-navbar-height) - var(--size-loginbar-height))';
    }}
  );
  transition: transform var(--transition-default);

  left: 0;
  z-index: var(--index-loginbar);
`;
