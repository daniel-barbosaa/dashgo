// src/styles/theme.ts
import { extendTheme, ThemeConfig } from '@chakra-ui/react';



const theme = extendTheme({
  colors: {
    gray: {
      "900": '#181b23',
      "800": '#1f2029',
      "700": '#353646',
      "600": '#4d4b63',
      "500": '#616480',
      "400": '#797d9a',
      "300": '#9699b0',
      "200": '#b3b5c6',
      "100": '#d1d2dc',
      "50": '#eeeef2',
    }
  },
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif',
  },
  styles: {
    global: {
      body: {
        fontFamily: "Roboto, sans-serif",
        bg: 'gray.900',
        color: 'gray.50',
      },
      h2: {
        fontFamily: "Roboto, sans-serif",
      },
      th: {
        fontFamily: "Roboto, sans-serif",
      },
    },
  },
});

export default theme;
