'use client';
import { deepOrange, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
// import { Montserrat } from 'next/font/google';
 
// If loading a variable font, you don't need to specify the font weight
// const montserrat = Montserrat({ subsets: ['latin'] })

const darkTheme = createTheme({
    palette: {
        // palette values for dark mode
        primary: deepOrange,
        divider: deepOrange[700],
        background: {
          default: deepOrange[900],
          paper: deepOrange[900],
        },
        text: {
          primary: '#fff',
          secondary: grey[500],
        },
      },
    // typography: montserrat.className,
    // components: {
    //     MuiCssBaseline: {
    //       styleOverrides: `
    //         @font-face {
    //           font-family: 'Montserrat, sans-serif';
    //           font-style: normal;
    //           font-display: swap;
    //           font-weight: 400;
    //           src: local('Montserrat'), local('Montserrat-Regular'), url(${montserrat}) format('ttf');
    //           unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
    //         }
    //       `,
    //     },
    // }
});

export default darkTheme