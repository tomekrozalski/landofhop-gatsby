import { css } from '@nfront/global-styles';

const globalStyles = css`
  :root {
    --color-black: #222;
    --color-white: #fff;
    --color-brightest: #f5f5f5;
    --color-brighter: #eee;
    --color-bright: #ddd;
    --color-dark: #ccc;
    --color-darker: #aaa;
    --color-success-strong: #4cb231;
    --color-success-light: #beddb5;
    --color-warning-strong: #d0be26;
    --color-danger-strong: #be5656;
    --color-danger-light: #dec1c1;

    --font-primary: 'sofia-pro', 'foco', sans-serif;

    --index-spinner: 9;
    --index-loginbar: 10;
    --index-navbar: 11;
    --index-header: 12;

    --size-container-max-width: 100%;
    --size-header-height: 4rem;
    --size-input-height: 3.4rem;
    --size-loginbar-height: 8rem;
    --size-navbar-height: 10rem;
    --size-tiles-gap: 1rem;

    --transition-default: 0.2s cubic-bezier(0.42, 0, 1, 1);
  }

  @media (min-width: 768px) {
    :root {
      --size-header-height: 6rem;
      --size-navbar-height: 6rem;
    }
  }

  @media (min-width: 1024px) {
    :root {
      --size-container-max-width: 1030px;
    }
  }

  @media (min-width: 1600px) {
    :root {
      --size-container-max-width: 1160px;
      --size-header-height: 12rem;
      --size-navbar-height: 8rem;
    }
  }

  html {
    font-size: 10px;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: var(--color-white);
    font: 400 1.5rem / 2rem var(--font-primary);
    color: var(--color-black);
  }

  h1 {
    margin: 0;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button {
    border: none;
    background: inherit;
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  input[type='email'],
  input[type='number'],
  input[type='password'],
  input[type='text'] {
    display: block;
    width: 100%;
    height: var(--size-input-height);
    border: 0;
    border-bottom: 1px solid var(--color-dark);
    padding: 0 1rem;
    background-color: var(--color-brighter);
    font: 300 1.6rem / 1 var(--font-primary);
    color: var(--color-black);
  }

  input[type='email']:focus,
  input[type='number']:focus,
  input[type='password']:focus,
  input[type='text']:focus {
    outline: none;
    border-bottom-color: var(--color-black);
  }

  input[type='email']:disabled,
  input[type='number']:disabled,
  input[type='password']:disabled,
  input[type='text']:disabled {
    border-bottom: 1px solid var(--color-bright);
    background-color: var(--color-brightest);
    color: var(--color-darker);
    cursor: not-allowed;
  }

  input.withStatusIcon {
    padding: 0 25px 0 1rem;
  }

  label {
    font: 300 1.6rem / 1 var(--font-primary);
    margin-right: 1rem;
  }
`;

export default globalStyles;
