import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import db from '../db.json';

import type { AppProps } from 'next/app';

interface IGlobalStylesProps {
  theme: {
    colors: {
      primary: string,
      secondary: string,
      mainBg: string,
      contrastText: string,
      wrong: string,
      success: string
    }
    borderRadius: string
  }
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