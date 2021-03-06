import { createGlobalStyle } from '@nfront/global-styles';

const GlobalStyleComponent = createGlobalStyle`
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
    --color-producer-lightest: #fef6f7;
    --color-producer-light: #ffe6ea;
    --color-producer-strong: #c67e89;
    --color-editorial-light: #c1d5f8;
    --color-editorial-strong: #577dc0;
    --color-ingredients-hop: #2a9d8f;
    --color-ingredients-malt: #264653;
    --color-ingredients-yeast: #e9c46a;
    --color-ingredients-appendix: #f4a261;

    --font-primary: 'fira-sans', sans-serif;
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;

    --index-dropdown: 4;
    --index-spinner: 9;
    --index-loginbar: 10;
    --index-navbar: 11;
    --index-header: 12;
    --index-backdrop: 20;
    --index-modal: 21;

    --size-container-max-width: 100%;
    --size-header-height: 6rem;
    --size-input-height: 3.4rem;
    --size-loginbar-height: 18rem;
    --size-navbar-height: 10rem;
    --size-tiles-gap: 1rem;

    --transition-default: 0.2s cubic-bezier(0.42, 0, 1, 1);
  }

  @media (min-width: 560px) {
    :root {
      --size-loginbar-height: 12rem;
    }
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
      --size-loginbar-height: 8rem;
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
    font: var(--font-weight-light) 1.5rem / 2.5rem var(--font-primary);
    color: var(--color-black);
  }

  body.scroll-lock {
    overflow: hidden;
  }

  h1 {
    margin: 0;
    font: var(--font-weight-medium) 3rem / 3.8rem var(--font-primary);
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    font-weight: var(--font-weight-light);
    line-height: 1.5;
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

  strong,
  em {
    font-weight: var(--font-weight-regular);
    font-style: normal;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }
`;

export default GlobalStyleComponent;
