import React, { ReactElement } from 'react';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

import db from '../db.json';

interface IGlobalStylesProps {
  theme: {
    colors: {
      primary: string;
      secondary: string;
      mainBg: string;
      contrastText: string;
      wrong: string;
      success: string;
    };
    borderRadius: string;
  };
}

const GlobalStyle = createGlobalStyle<IGlobalStylesProps>`
    * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Ubuntu', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,700;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
