import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root{
    --primary-color: #e9e9ea;
    --secondary-color: #fcb432;
    --third-color: #ffb633;
    --color-title: #f4f5f6;
    --color-background: #100f2e;

  }

  body {
    background: var(--color-background);
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 62.5%;

    ul {
      list-style: none;
    }

    a {
      text-decoration: none;
    }


  }

`
