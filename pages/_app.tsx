import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import db from '../db.json';

import type { AppProps } from 'next/app';

const GlobalStyle = createGlobalStyle`
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

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Component {...pageProps}/>
            </ThemeProvider>
        </>

    )
}